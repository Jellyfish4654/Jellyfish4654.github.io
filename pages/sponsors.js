import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import { SponsorTier1, SponsorTier2, SponsorTier3, PartnerTier } from "../components/Common/SponsorData";
import Footer from "../components/Layouts/Footer";

export default function SponsorPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Thank You to Our Sponsors"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sponsors"
      />

      <div className="pb-50" >
        <h2 className="sponsor-header" style={{ marginTop: '20px', marginLeft: '20px' }}>Tier 3 Sponsors ($500+)</h2>
        <SponsorTier3 />
      </div>

      <div className="pb-50">
        <h2 className="sponsor-header" style={{ marginTop: '20px', marginLeft: '20px' }}>Partners</h2>
        <PartnerTier />
      </div>

      <Footer />
    </>
  );
}