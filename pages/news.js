import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import News  from "../components/News/NewsGrid";
import Footer from "../components/Layouts/Footer";

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
