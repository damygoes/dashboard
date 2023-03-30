import "@/styles/globals.css";

import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

import { apomapTheme } from "@/styles/theme";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={apomapTheme} withNormalizeCSS withGlobalStyles>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </MantineProvider>
  );
}
