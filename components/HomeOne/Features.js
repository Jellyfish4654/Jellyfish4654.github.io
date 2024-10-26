import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "flaticon-team",
    title: "Our Team",
    shortText:
      "FIRST Tech Challenge Team 4654 Jellyfish",
    viewDetails: "/about-us",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-jellyfish",
    title: "Junior Jellies",
    shortText:
      "Our STEM-focused afterschool program",
    viewDetails: "/juniorjellies",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-sponsor",
    title: "Sponsors",
    shortText:
      "Learn about our generous sponsors",
    viewDetails: "/sponsors",
    aosDelay: "300",
  },
];

const Features = () => {
  return (
    <>
      <div className="features-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6 p-0"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <Link href={value.viewDetails} className="read-more-icon">
                      <span className="flaticon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
