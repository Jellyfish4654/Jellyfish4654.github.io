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
                  Our Team
                </h2>
                <p>FIRST Tech Challenge is an exciting and competitive robotics program that challenges teams to design, build, program, and operate robots in a head-to-head alliance format. Through this program, students have the opportunity to develop crucial STEM skills and apply engineering principles, all while learning the importance of teamwork, innovation, and hard work. Participating in FTC can also open up opportunities for students to apply for scholarships and internships offered by universities and companies that support FIRST programs.</p>
                <p>Our team, 4654, was founded in 2010 and we are proud to compete in the NY Excelsior Region. This region encompasses all of New York State except for New York City and Long Island, and we are excited to represent our region at regional and national competitions. By participating in this competition, we hope to inspire a love of STEM in our members and make a positive impact in our community.</p>

                <Link href="https://www.firstinspires.org/robotics/ftc" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
