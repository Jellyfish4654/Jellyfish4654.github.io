import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import WhatWeDo from "../components/About/WhatWeDo";
import TeamCard from "../components/About/TeamCard";
import Footer from "../components/Layouts/Footer";

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
