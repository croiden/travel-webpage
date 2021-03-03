// @flow
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#2B2ECF",
    secondary: "#FF0066",
    white: "#FFFFFF",
    tagBg: "#F6C937",
    grey: "#C5D3E8",
    background: "#E7EDF6",
    darkGrey: "#7F8A9C",
    purple: "#652BCF",
  },
  fonts: ["OpenSans", "OpenSans-Bold"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

type Props = {
  children: Element<*>,
};
const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;