import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Router} from "./Router";
import {ColorSchemeProvider, MantineProvider} from "@mantine/core";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ColorSchemeProvider colorScheme={'light'} toggleColorScheme={() => {}}>

      <MantineProvider withNormalizeCSS theme={{
              primaryColor: "greenboneGreen",
              colors: {
                  greenboneGreen: ["#D8F1E2", "#A1DDBA", "#49BE7A", "#11AB51", "#0E823E", "#0E823E", "#0E823E", "#074320", "#052B15"]
              },
              defaultRadius: "xl"

          }}>
      <Router />
          </MantineProvider>
      </ColorSchemeProvider>
  </React.StrictMode>
)
