import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/JuniorJellies/About";
import WhatWeOffer from "../components/JuniorJellies/Programs";
import Footer from "../components/Layouts/Footer";

export default function juniorjellies() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Junior Jellies"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Junior Jellies"
      />

      <About />

      <WhatWeOffer />

      <Footer />
    </>
  );
}
