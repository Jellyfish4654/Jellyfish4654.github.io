import React from "react";
import Navbar from "../components/navigation/Navbar";
import PageBanner from "../components/shared/PageBanner";
import WhatWeDo from "../components/about/WhatWeDo";
import TeamCard from "../components/about/TeamCard";
import Footer from "../components/navigation/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About the Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Our Team"
      />

      <WhatWeDo />

      <TeamCard />

      <Footer />
    </>
  );
}
