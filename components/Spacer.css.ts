import { recipe } from "@vanilla-extract/recipes";

export const spacer = recipe({
  variants: {
    size: {
      2: {
        width: "2px",
        height: "2px",
      },
      4: {
        width: "4px",
        height: "4px",
      },
      8: {
        width: "8px",
        height: "8px",
      },
      12: {
        width: "12px",
        height: "12px",
      },
      16: {
        width: "16px",
        height: "16px",
      },
      32: {
        width: "32px",
        height: "32px",
      },
    },
  },
});
