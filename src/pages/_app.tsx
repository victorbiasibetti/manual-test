import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const TTNorms = localFont({ src: "../../public/fonts/TTNorms-Regular.woff2" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={TTNorms.className}>
      <Component {...pageProps} />
    </main>
  );
}
