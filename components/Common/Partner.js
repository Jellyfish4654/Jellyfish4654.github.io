import React from "react";

const partnerDataTier3 = [
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

const partnerDataTier2 = [
];

const partnerDataTier1 = [
];

const PartnerTier = ({ partnerData }) => (
  <>
    <div className="brand-area">
      <div className="container">
        <div className="brand-list">
          {partnerData.map((value, i) => (
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

const PartnerTier3 = () => <PartnerTier partnerData={partnerDataTier3} />;
const PartnerTier2 = () => <PartnerTier partnerData={partnerDataTier2} />;
const PartnerTier1 = () => <PartnerTier partnerData={partnerDataTier1} />;

export { PartnerTier1, PartnerTier2, PartnerTier3 };