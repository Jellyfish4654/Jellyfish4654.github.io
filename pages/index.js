import React from 'react';
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import Footer from "../components/Layouts/Footer";

export default function Index() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Features />

      <Footer />
    </>
  );
}