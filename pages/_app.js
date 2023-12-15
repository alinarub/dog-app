import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/contexts/theme";
import Layout from "@/components/Layout";
import { DarkModeStyles } from "../styles";

export default function App({ Component, pageProps }) {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  // useEffect(() => {
  //   console.log("switch to darkmode");
  // }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      {themeMode === "light" ? <GlobalStyle /> : <DarkModeStyles />}
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((response) => response.json()),
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ThemeProvider>
  );
}
