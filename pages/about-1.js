import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/OurTeam/About";
import TeamCard from "../components/Team/TeamCard";
import Footer from "../components/Layouts/Footer";

export default function About1() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Meet the Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Our Team"
      />

      <About />

      <TeamCard />

      <Footer />
    </>
  );
}
