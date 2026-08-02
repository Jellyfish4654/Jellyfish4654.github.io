import React from "react";

const sponsorDataTier3 = [
  {
    name: "The Glen Schuster Memorial Fund",
    image: "/images/sponsors/schuster.png",
    background: true,
    aosDelay: "100",
  },
  {
    name: "SummerTech",
    image: "/images/sponsors/summertech.png",
    url: "https://www.summertech.net/",
    aosDelay: "200",
  },
  {
    name: "TeachForth",
    image: "/images/sponsors/teachforth.png",
    url: "https://teachforth.org/",
    aosDelay: "300",
  },
  {
    name: "Gene Haas Foundation",
    image: "/images/sponsors/haas.png",
    url: "https://www.ghaasfoundation.org/",
    aosDelay: "400",
  },
];

const sponsorDataTier2 = [
];

const sponsorDataTier1 = [
  {
    name: "Russian School of Math",
    image: "/images/sponsors/rsm.png",
    url: "https://www.mathschool.com/",
    aosDelay: "500",
  },
];
const partnerData = [
  // {
  //   image: "/images/sponsors/VRTX.png",
  //   url: "https://printvrtx.com/",
  //   aosDelay: "100",
  // },
];
const SponsorTier = ({ sponsorData }) => (
  <>
    <div className="brand-area">
      <div className="container">
        <div className="brand-list">
          {sponsorData.map((value, i) => (
            <div
              className="single-brand"
              // data-aos="fade-in"
              // data-aos-duration="1200"
              // data-aos-delay={value.aosDelay}
              key={i}
            >
              <a href={value.url} target="_blank" rel="noopener noreferrer">
                <img src={value.image} alt={value.name} />
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

export { SponsorTier1, SponsorTier2, SponsorTier3, PartnerTier, sponsorDataTier3, sponsorDataTier2, sponsorDataTier1};
