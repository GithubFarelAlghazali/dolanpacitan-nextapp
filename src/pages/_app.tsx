import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./parts/Navbar";
import Footer from "./parts/Footer";

export default function App({ Component, pageProps }: AppProps) {
     return (
          <>
               <Navbar />
               <Component {...pageProps} className="h-full" />;
               <Footer />
          </>
     );
}
