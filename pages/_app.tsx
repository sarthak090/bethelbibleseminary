import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import Script from "next/script";
import SEO from "next-seo.config";
import { NavProvider } from "../context/NavbarContext";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../styles/globals.scss";
import "../styles/main.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
        crossOrigin="anonymous"
      />
      <DefaultSeo {...SEO} />
      <NavProvider>
        <Component {...pageProps} />;
      </NavProvider>
    </>
  );
}

export default MyApp;
