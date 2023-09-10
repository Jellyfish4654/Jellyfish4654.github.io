import React from "react";
import Link from "next/link";

const NewsGridCard = () => {
  return (
    <>
      <section className="news-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news-details">
                    <img src="/images/blog/blog1.png" alt="Image" />
                  </Link>

                  <div className="dates">
                    <span>9 September</span>
                  </div>
                </div>

                <div className="news-content-wrap">

                  <Link href="/news-details">
                    <h3>CENTERSTAGE</h3>
                  </Link>

                  <p>
                    First announces the 2023-2024 game, CENTERSTAGE 
                  </p>

                  <Link href="/news-details" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default NewsGridCard;
