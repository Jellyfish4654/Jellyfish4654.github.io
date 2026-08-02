import React from "react";
import Link from "next/link";

const NewsGrid = () => {
  return (
    <>
      <section className="news-area ptb-100">
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/albany_2023_2024">
                    <img src="/images/blog/blog2.png" alt="Image" />
                  </Link>

                  <div className="dates">
                    <span>13 January</span>
                  </div>
                </div>

                <div className="news-content-wrap">

                  <Link href="/news/albany_2023_2024">
                    <h3>ALBANY ACADEMIES QUALIFIER</h3>
                  </Link>

                  <p>
                    Jellyfish success at Albany Academies Qualifier
                  </p>

                  <Link href="/news/albany_2023_2024" className="read-more">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/centerstage">
                    <img src="/images/blog/blog1.png" alt="Image" />
                  </Link>

                  <div className="dates">
                    <span>9 September</span>
                  </div>
                </div>

                <div className="news-content-wrap">

                  <Link href="/news/centerstage">
                    <h3>CENTERSTAGE</h3>
                  </Link>

                  <p>
                    First announces the 2023-2024 game, CENTERSTAGE 
                  </p>

                  <Link href="/news/centerstage" className="read-more">
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

export default NewsGrid;
