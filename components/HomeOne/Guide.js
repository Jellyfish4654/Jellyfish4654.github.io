import React from "react";
import Link from "next/link";
import Image from "next/image";

import guideIMG from "../../public/images/guide-img.png";

const Guide = () => {
  return (
    <>
      <section className="guide-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="guide-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <Image src={guideIMG} alt="Image" width={360} height={360} />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="guide-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h2>Branding Guide</h2>
                <p>
                  A guide that outlines our brand strategy, messaging, visual
                  identity, and photography, serving as a model for other FTC
                  teams seeking guidance. The detailed information and rules
                  within the guide ensure consistency in material development
                  for competitions, press, and the public, enabling viewers to
                  form accurate, unified images of a team and its endeavors.
                </p>

                <Link
                  href="https://drive.google.com/file/d/1FAi_FWIjCwsi9VkN48IbbdhyYIwLbqgi/view?usp=sharing"
                  className="default-btn"
                >
                  Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guide;
