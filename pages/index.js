import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Features from "../components/HomeOne/Features";
import Footer from "../components/Layouts/Footer";
import AdSense from "../components/Common/AdSense";
import GoogleTag from "../components/Common/GoogleTag";

export default function Index() {
  return (
    <>
      <GoogleTag />

      <Navbar />

      <MainBanner />

      <Features />

      <AdSense />

      <Footer />
    </>
  );
}