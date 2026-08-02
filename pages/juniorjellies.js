import React from "react";
import Navbar from "../components/navigation/Navbar";
import PageBanner from "../components/shared/PageBanner";
import JJOverview from "../components/juniorJellies/JJOverview";
import Footer from "../components/navigation/Footer";
import JJPrograms from "../components/juniorJellies/Programs";

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

      <JJOverview />

      <JJPrograms />

      <Footer />
    </>
  );
}
