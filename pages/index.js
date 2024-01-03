import React from 'react';
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import Footer from "../components/Layouts/Footer";
import AdSense from "../components/Common/AdSense";

export default function Index() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <AdSense />

      <Footer />
    </>
  );
}