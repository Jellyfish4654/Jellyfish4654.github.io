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
        pageTitle="Thank You to Our Sponsors!"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sponsors"
      />

      <div>
        <h2 style={{ marginTop: '20px', marginLeft: '20px', marginBottom: '40px'}}>Interested in sponsoring us?<a href="https://drive.google.com/file/d/1ld-w432saaQB9OcNNTSOIIZJRXcn47sM/view" target="_blank" rel="noreferrer noopener"><button style={{marginLeft: '20px'}} className="default-btn">View Sponsor Guide</button></a></h2>
        <h2 className="sponsor-header" style={{ marginTop: '20px', marginLeft: '20px' }}>Tier 3 Sponsors</h2>
        <SponsorTier3 />
        <h2 className="sponsor-header" style={{ marginTop: '20px', marginLeft: '20px' }}>Tier 1 Sponsors</h2>
        <SponsorTier1 />
      </div>

      {/* <div className="pb-50">
        <h2 className="sponsor-header" style={{ marginTop: '20px', marginLeft: '20px' }}>Partners</h2>
        <PartnerTier />
      </div> */}

      <Footer />
    </>
  );
}
