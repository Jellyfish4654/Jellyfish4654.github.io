import React from "react";

const sponsorDataTier3 = [
  {
    image: "/images/sponsors/summertech.png",
    url: "https://www.summertech.net/",
    aosDelay: "100",
  },
  {
    image: "/images/sponsors/coditum.png",
    url: "https://coditum.com/",
    aosDelay: "200",
  },
  {
    image: "/images/sponsors/teachforth.png",
    url: "https://teachforth.org/",
    aosDelay: "300",
  },
];

const sponsorDataTier2 = [
];

const sponsorDataTier1 = [
];
const partnerData = [
  {
    image: "/images/sponsors/VRTX.png",
    url: "https://printvrtx.com/",
    aosDelay: "100",
  },
];
const SponsorTier = ({ sponsorData }) => (
  <>
    <div className="brand-area">
      <div className="container">
        <div className="brand-list">
          {sponsorData.map((value, i) => (
            <div
              className="single-brand"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay={value.aosDelay}
              key={i}
            >
              <a href={value.url} target="_blank" rel="noopener noreferrer">
                <img src={value.image} alt="Image" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const SponsorTier3 = () => <SponsorTier sponsorData={sponsorDataTier3} />;
const SponsorTier2 = () => <SponsorTier sponsorData={sponsorDataTier2} />;
const SponsorTier1 = () => <SponsorTier sponsorData={sponsorDataTier1} />;
const PartnerTier = () => <SponsorTier sponsorData={partnerData} />;

export { SponsorTier1, SponsorTier2, SponsorTier3, PartnerTier };
