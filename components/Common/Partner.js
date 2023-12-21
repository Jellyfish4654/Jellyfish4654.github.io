import React from "react";

const partnerDataTier3 = [
  {
    image: "/images/brands/brand1.png",
    url: "#",
    aosDelay: "100",
  },
  {
    image: "/images/brands/brand2.png",
    url: "#",
    aosDelay: "200",
  },
];

const PartnerTier3 = () => {
  return (
    <>
      <div className="brand-area">
        <div className="container">
          <div className="brand-list">
            {partnerDataTier3 &&
              partnerDataTier3.map((value, i) => (
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
};

export default PartnerTier3;