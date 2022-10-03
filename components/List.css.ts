import { globalStyle, style } from "@vanilla-extract/css";

export const list = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

globalStyle(`${list} > li`, {
  margin: "0 0 1.25rem",
});

globalStyle(`${list} > li::before`, {
  content: "・",
});
