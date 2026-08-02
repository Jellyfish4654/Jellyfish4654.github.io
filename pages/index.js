import React from "react";
import Navbar from "../components/navigation/Navbar";
import MainBanner from "../components/home/MainBanner";
import Features from "../components/home/Features";
import Footer from "../components/navigation/Footer";
import Guide from "../components/home/Guide";

export default function Index() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <Guide />

      <Footer />
    </>
  );
}
