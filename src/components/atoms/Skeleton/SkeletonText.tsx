import { useEffect, useState, useRef, useCallback } from "react";
import SkeletonLine from "./SkeletonLine";

interface SkeletonTextProps {
  charCount: number;
  lineHeight?: number;
  padding?: string;
  lineMargin?: string;
}

const SkeletonText = ({
  charCount,
  lineHeight = 1,
  padding = "0rem",
  lineMargin = "0.4rem",
}: SkeletonTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<number[]>([]);
  const [lineHeightPx, setLineHeightPx] = useState<number>(lineHeight);

  const calculateLines = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;

    const style = window.getComputedStyle(containerRef.current);
    const fontSizePx = parseFloat(style.fontSize);
    const computedLineHeight = parseFloat(style.lineHeight);

    const avgCharWidth = fontSizePx * 0.5;

    const charsPerLine = Math.floor(containerWidth / avgCharWidth) || 1;

    const totalLines = Math.ceil(charCount / charsPerLine);

    const linesArray = Array(totalLines).fill(charsPerLine);
    if (linesArray.length) {
      const lastLineChars = charCount - charsPerLine * (totalLines - 1);
      linesArray[totalLines - 1] = lastLineChars;
    }

    setLines(linesArray);
    setLineHeightPx(computedLineHeight);
  }, [charCount]);

  useEffect(() => {
    calculateLines();
    window.addEventListener("resize", calculateLines);
    return () => window.removeEventListener("resize", calculateLines);
  }, [charCount, lineHeight, calculateLines]);

  return (
    <div ref={containerRef} style={{ lineHeight: `${lineHeight}` }}>
      {lines.map((charsInLine, idx) => (
        <SkeletonLine
          key={idx}
          $widthPercent={(charsInLine / Math.max(...lines)) * 100}
          $height={lineHeightPx}
          $lineMargin={lineMargin}
          $padding={padding}
        />
      ))}
    </div>
  );
};

export default SkeletonText;
