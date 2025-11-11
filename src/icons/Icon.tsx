import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  viewBox?: string;
  strokeWidth?: number;
  strokeLinecap?: "butt" | "round" | "square" | "inherit";
  strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
}

export const Icon = ({
  size = 24,
  color = "currentColor",
  viewBox = "0 0 24 24",
  strokeWidth = 2,
  strokeLinecap = "round",
  strokeLinejoin = "round",
  children,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    {...props}
  >
    {children}
  </svg>
);
