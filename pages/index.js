import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import Footer from "../components/Layouts/Footer";
import GoogleTag from "../components/Common/GoogleTag";
import Guide from "../components/HomeOne/Guide";

export default function Index() {
  return (
    <>
      <GoogleTag />

      <Navbar />

      <MainBanner />

      <Features />

      <Guide />

      <Footer />
    </>
  );
}
