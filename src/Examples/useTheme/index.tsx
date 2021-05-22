import { createTheme } from "@reactivers/hooks";
import { useEffect, useState } from "react";

interface ITheme {
  white: string;
  red: string;
  green: string;
  blue: string;
}

interface Themes {
  light: ITheme;
  dark: ITheme;
}

const theme: Themes = {
  light: {
    white: "white",
    red: "red",
    green: "green",
    blue: "blue"
  },
  dark: {
    white: "#aaa",
    red: "darkred",
    green: "darkgreen",
    blue: "darkblue"
  }
};

const { useTheme, ThemeProvider } = createTheme<ITheme>();

const UseThemeExampleWrapper = () => {
  return (
    <ThemeProvider styles={theme}>
      <UseThemeExample />
    </ThemeProvider>
  );
};

const UseThemeExample = () => {
  const { current, theme, setCurrentTheme } = useTheme();

  return (
    <div
      className="sample-page center"
      style={{ backgroundColor: theme.white }}
    >
      <div style={{ width: 330 }} className="card">
        <h2>Use Theme Example </h2>
        <h3>Current Theme: {current}</h3>
        <div className="center" style={{ justifyContent: "space-around" }}>
          <div
            style={{ width: 100, height: 100, backgroundColor: theme.red }}
          />
          <div
            style={{ width: 100, height: 100, backgroundColor: theme.green }}
          />
          <div
            style={{ width: 100, height: 100, backgroundColor: theme.blue }}
          />
        </div>
        <div style={{ marginTop: 16 }}>
          <button onClick={() => setCurrentTheme("light")}>Light</button>
          <button onClick={() => setCurrentTheme("dark")}>Dark</button>
        </div>
      </div>
    </div>
  );
};

export default UseThemeExampleWrapper;
