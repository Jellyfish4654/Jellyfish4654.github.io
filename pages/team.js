import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamCard from "../components/Team/TeamCard";
import Footer from "../components/Layouts/Footer";

// Disable page
export async function getServerSideProps() {
    return {
        notFound: true
    };
}

export default function Team() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <TeamCard />

      <Footer />
    </>
  );
}
