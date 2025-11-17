import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // add what you need
});

export default function App({ Component, pageProps }: AppProps) {
  return <div className={lato.className}><Component {...pageProps} /></div>;
}
