import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {Layout} from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <ColorSchemeProvider colorScheme={'light'} toggleColorScheme={() => {}}>
    <MantineProvider withNormalizeCSS theme={{
      primaryColor: "greenboneGreen",
      colors: {
        greenboneGreen: ["#D8F1E2", "#A1DDBA", "#49BE7A", "#11AB51", "#0E823E", "#0E823E", "#0E823E", "#074320", "#052B15"]
      },
      defaultRadius: "xl"

    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  </ColorSchemeProvider>
}

export default MyApp
