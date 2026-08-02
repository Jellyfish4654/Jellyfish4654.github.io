import React from "react";
import Navbar from "../../components/navigation/Navbar";
import PageBanner from "../../components/shared/PageBanner";
import NewsDetailsContent from "../../components/news/post/CenterStage";
import Footer from "../../components/navigation/Footer";

export default function NewsDetails() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="News Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Details"
      />

      <NewsDetailsContent />

      <Footer />
    </>
  );
}
