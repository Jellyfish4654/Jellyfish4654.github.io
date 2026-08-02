import React from "react";
import Navbar from "../components/navigation/Navbar";
import PageBanner from "../components/shared/PageBanner";
import News  from "../components/news/NewsGrid";
import Footer from "../components/navigation/Footer";

export default function NewsGrid() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="News"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News"
      />

      <News  />

      <Footer />
    </>
  );
}
