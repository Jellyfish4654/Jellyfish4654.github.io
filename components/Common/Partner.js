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