import React from "react";
import Link from "next/link";
import SubscribeForm from "../SubscribeForm.js";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    

    <>
      <SubscribeForm />
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <img src="/images/white-logo.png" alt="Image" />
                </Link>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.instagram.com/jellyfish4654_/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@jellyfish4654" target="_blank">
                      <i className="bx bxl-tiktok"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Important Links</h3>
                <ul>
                  <li>
                    <Link href="/about-us">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/juniorjellies">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Junior Jellies
                    </Link>
                  </li>
                  <li>
                    <Link href="/sponsors">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Sponsors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <h3>Information</h3>

                <ul className="information">

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>Email</span>
                    bbhsrobotics4654@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;

/*

"https://jellyfishbbhs.us6.list-manage.com/subscribe/post?u=10a9db05c9189892653f2aad0&amp;id=a7f291a03b&amp;f_id=00e357e5f0" 
<input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="">
*/

