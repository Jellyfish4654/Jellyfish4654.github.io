import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import Footer from "../components/Layouts/Footer";

export default function Index() {
  return (
    <>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZW1M1VG099"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZW1M1VG099');
          `}
        </script>
      </Helmet>

      <Navbar />

      <MainBanner />

      <Features />

      {/* <News /> */}

      <Footer />
    </>
  );
}