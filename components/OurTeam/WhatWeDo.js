import React from "react";
import Link from "next/link";

const WhatWeDo = () => {
  return (
    <>
      <section className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                {/*<img src="/images/ftc-logo.png" alt="Image" />*/}
                <img src="/images/team2526clear.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <h2>
                  What We Do
                </h2>
                <p>FIRST Tech Challenge team 4654 Jellyfish was founded in 2010 in Rye Brook, NY. We are proud to
                  represent our school, Blind Brook High School, at regional and international competitions.
                  We compete in the New York Excelsior Region, covering all of NY State except for NYC and Long Island.
                  Our goal is to inspire a love of STEM in our members and make a positive impact in our community.</p>

                <p>The FIRST Tech Challenge is a global robotics competition that challenges teams to design,
                  build, and program robots they drive in 2v2 alliance matches. By participating,
                  students can learn mechanical engineering, computer science, computer-aided design,
                  graphic design, and more. Team members also learn how to collaborate in large groups,
                  act with Gracious Professionalism ®, and manage time effectively. Finally, participating in FTC
                  often creates opportunities for students to apply for scholarships and internships offered by
                  universities and companies that support FIRST programs.</p>

                <a href="https://www.firstinspires.org/programs/ftc" className="default-btn" target="_blank" rel="noopener noreferrer">
                  Learn More About FTC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
