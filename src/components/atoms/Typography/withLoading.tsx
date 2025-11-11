import type { ComponentType, PropsWithChildren } from "react";
import { SkeletonText } from "../Skeleton";

const withLoading = <T extends object>(
  Component: ComponentType<T>,
  styles: {
    fontSize: string;
    fontWeight: number | string;
    lineHeight: number;
    letterSpacing: string;
    padding?: string;
    lineMargin?: string;
  }
) => {
  return ({
    loading,
    charCount = 20,
    children,
    ...props
  }: PropsWithChildren<T> & { loading?: boolean; charCount?: number }) => {
    if (loading) {
      return (
        <div
          style={{
            fontSize: styles.fontSize,
            lineHeight: styles.lineHeight,
            fontWeight: styles.fontWeight,
          }}
        >
          <SkeletonText {...styles} charCount={charCount} />
        </div>
      );
    }
    return <Component {...(props as T)}>{children}</Component>;
  };
};

export default withLoading;
