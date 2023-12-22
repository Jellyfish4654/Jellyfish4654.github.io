import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import { PartnerTier1, PartnerTier2, PartnerTier3 } from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";

export default function SponsorPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Thank You to Our Generous Sponsors"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sponsors"
      />

      <div className="pb-50">
        <h2 className="sponsor-header">Tier 3 Sponsors</h2>
        <PartnerTier3 />
      </div>
      <Footer />
    </>
  );
}