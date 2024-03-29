import React from "react";
import Link from "next/link";

const NewsSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <div className="post-wrap">
            <article className="item">
              <Link href="/news/albany_2023_2024" className="thumb">
                <span className="fullimage cover bg2" role="img"></span>
              </Link>

              <div className="info">
                <time> January 13, 2024</time>
                <h4 className="title usmall">
                  <Link href="/news/albany_2023_2024">
                  Jellyfish success at Albany Academies Qualifier
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/centerstage" className="thumb">
                <span className="fullimage cover bg1" role="img"></span>
              </Link>

              <div className="info">
                <time> September 9, 2023</time>
                <h4 className="title usmall">
                  <Link href="/news/centerstage">
                  First announces the 2023-2024 game, CENTERSTAGE
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>


          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSidebar;
