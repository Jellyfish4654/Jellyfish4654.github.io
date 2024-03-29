import React from "react";
import NewsSidebar from "../NewsSidebar";
import Link from "next/link";

const post_CenterStage = () => {
  return (
    <>
      <section className="news-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <img
                    src="/images/blog-details/blog-details.jpg"
                    alt="Image"
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span> September 9, 2023
                      </li>
                    </ul>
                  </div>

                  <h3>
                    CENTERSTAGE
                  </h3>

                  <p>
                    Today, the FTC game Centerstage was officially released. The game involves scores points on the backdrop, launching a drone, and hanging the robot on the rigging. As we embark on this new season, our goal is to start on a strong note and achieve great success throughout the season. Additionally one of our largest goals this season is to emphasize sustainability and outreach. We are committed to recruiting dedicated members and introducing them to the core principles of FIRST. Likewise, we are continually seeking opportunities to foster professional outreach within our STEM and local community.
                  </p>

                  <div className="embedded-video">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/6e-5Uo1dRic"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded YouTube Video"
                    ></iframe>
                  </div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="bx bx-left-arrow-alt"></i> Prev Post
                      </Link>
                    </div>

                    <div className="nav-next">
                      <Link href="/news/albany_2023_2024">
                        Next Post <i className="bx bx-right-arrow-alt"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <NewsSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default post_CenterStage;