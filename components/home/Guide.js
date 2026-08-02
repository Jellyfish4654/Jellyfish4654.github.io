import React from "react";
import Link from "next/link";
import Image from "next/image";

import guideIMG from "../../public/images/guide-img.png";
import ftcIMG from "../../public/images/ftc-logo.png";

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
                <Image src={ftcIMG} alt="Image" width={432} height={432} />
              </div>
            </div>

            <div className="col-lg-6">
              <div
                style={{ backgroundColor: `#fff`, padding: '30px', boxShadow: '0 0 20px 3px rgba(0, 0, 0, 0.1)', borderRadius: '10px'}}
                className="guide-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h2><Image src={guideIMG} alt="Image" height={120} style={{marginRight: '20px'}}/><span>Branding Guide</span></h2>
                <p style={{ textWrap: 'pretty' }}>
                  A guide that outlines our brand strategy and visual
                  identity. The rules within the guide ensure consistency in
                  team design, including portfolios and marketing materials.
                  It also serves as a model for other groups seeking guidance
                  on how to form unified images of a team or organization.
                </p>

                <Link
                  href="https://drive.google.com/file/d/1FAi_FWIjCwsi9VkN48IbbdhyYIwLbqgi/view?usp=sharing"
                  className="default-btn"
                >
                  View PDF
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
