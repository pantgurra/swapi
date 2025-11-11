import styled from "styled-components";
import withLoading from "./withLoading";

const Sizes = {
  H1: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  H2: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
  },
  body: {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0em",
  },
  body2: {
    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0em",
  },
  subtitle: {
    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: "0em",
  },
  caption: {
    fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: "0em",
  },
  button: {
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 1.5,
    letterSpacing: "0em",
    padding: "calc(2rem + 4px)",
    lineMargin: "0rem",
  },
};

const Typography = {
  H1: withLoading(
    styled.h1`
      font-size: ${Sizes.H1.fontSize};
      font-weight: ${Sizes.H1.fontWeight};
      line-height: ${Sizes.H1.lineHeight};
      letter-spacing: ${Sizes.H1.letterSpacing};
    `,
    Sizes.H1
  ),
  H2: withLoading(
    styled.h2`
      font-size: ${Sizes.H2.fontSize};
      font-weight: ${Sizes.H2.fontWeight};
      line-height: ${Sizes.H2.lineHeight};
      letter-spacing: ${Sizes.H2.letterSpacing};
    `,
    Sizes.H2
  ),
  body: withLoading(
    styled.p`
      font-size: ${Sizes.body.fontSize};
      font-weight: ${Sizes.body.fontWeight};
      line-height: ${Sizes.body.lineHeight};
      letter-spacing: ${Sizes.body.letterSpacing};
    `,
    Sizes.body
  ),
  body2: withLoading(
    styled.p`
      font-size: ${Sizes.body2.fontSize};
      font-weight: ${Sizes.body2.fontWeight};
      line-height: ${Sizes.body2.lineHeight};
      letter-spacing: ${Sizes.body2.letterSpacing};
    `,
    Sizes.body2
  ),
  subtitle: withLoading(
    styled.p`
      font-size: ${Sizes.subtitle.fontSize};
      font-weight: ${Sizes.subtitle.fontWeight};
      line-height: ${Sizes.subtitle.lineHeight};
      letter-spacing: ${Sizes.subtitle.letterSpacing};
    `,
    Sizes.subtitle
  ),
  caption: withLoading(
    styled.p`
      font-size: ${Sizes.caption.fontSize};
      font-weight: ${Sizes.caption.fontWeight};
      line-height: ${Sizes.caption.lineHeight};
      letter-spacing: ${Sizes.caption.letterSpacing};
    `,
    Sizes.caption
  ),
  button: withLoading(
    styled.p`
      font-size: ${Sizes.button.fontSize};
      font-weight: ${Sizes.button.fontWeight};
      line-height: ${Sizes.button.lineHeight};
      letter-spacing: ${Sizes.button.letterSpacing};
      text-transform: ${Sizes.button.textTransform};
    `,
    Sizes.button
  ),
};

export default Typography;
