import localFont from "next/font/local";
import "./globals.css";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { CSPostHogProvider } from './providers'

const theme = createTheme({
    colorScheme: 'light'
  /** Put your mantine theme override here */
});

export const metadata = {
  title: "Santiago Font",
  description: "Portfolio page of Santiago Font",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
        <body className={` antialiased`}
        >
          <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS  defaultColorScheme="light">
            <CSPostHogProvider>
              {children}
            </CSPostHogProvider>
          </MantineProvider>
        </body>
    </html>
  );
}

