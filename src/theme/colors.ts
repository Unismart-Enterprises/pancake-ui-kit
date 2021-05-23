import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#aa8929",
  primaryBright: "#273e04",
  primaryDark: "#aa8929",
  secondary: "#8fd129",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#273e04",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#22310a",
  backgroundDisabled: "#ed1d23",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#8fd129",
  tertiary: "#8fd129",
  text: "#8fd129",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#1b2b03",
  inputSecondary: "#d7caec",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
