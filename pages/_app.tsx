import "@/styles/globals.css";
import Script from "next/script";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
