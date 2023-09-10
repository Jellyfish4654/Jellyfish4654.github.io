import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/images/about-img.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <h2>
                  Junior Jellies
                </h2>
                <p>
                Over the years, our team has flourished by organizing and facilitating Junior Jellies, a student-centered and self-run afterschool program focused on STEM, specifically introducing elementary school students to FIRST. Our primary objective is to instill FIRST principles, such as Gracious Professionalism and Coopetition, which promote friendly competition and positive collaboration, within Blind Brook students. We aspire to equip these students with the necessary skills to become successful, both as potential Jellyfish members and as lifelong learners. Our ultimate goal is to expand our impact within the community by inspiring the next generation to take an active interest in STEM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
