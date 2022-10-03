import { recipe } from "@vanilla-extract/recipes";

export const heading = recipe({
  variants: {
    level: {
      1: {
        fontSize: "2.5rem",
        lineHeight: 1.2,
        fontWeight: 800,
        letterSpacing: "-0.05rem",
        margin: "1rem 0",
      },
      2: {
        fontSize: "2rem",
        lineHeight: 1.3,
        fontWeight: 800,
        letterSpacing: "-0.05rem",
        margin: "1rem 0",
      },
      3: {
        fontSize: "1.5rem",
        lineHeight: 1.4,
        margin: "1rem 0",
      },
      4: {
        fontSize: "1.2rem",
        lineHeight: 1.5,
      },
    },
  },
});
