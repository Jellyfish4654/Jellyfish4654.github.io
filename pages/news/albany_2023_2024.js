import React from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NewsDetailsContent from "../../components/News/post/Albany_2023_2024";
import Footer from "../../components/Layouts/Footer";

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
