import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleTag from "../Common/GoogleTag";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <GoogleTag /> {/* Google Tag rendered here */}
      <div id="navbar" className="navbar-area fixed-top">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <img src="/images/white-logo.png" alt="logo" />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    Home 
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/about-us/"
                    className={`nav-link ${
                      currentPath == "/about-us/" && "active"
                    }`}
                  >
                    Our Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/sponsors/"
                    className={`nav-link ${
                      currentPath == "/sponsors/" && "active"
                    }`}
                  >
                    Sponsors
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/juniorjellies/"
                    className={`nav-link ${
                      currentPath == "/juniorjellies/" && "active"
                    }`}
                  >
                    Junior Jellies 
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="/news/"
                    className={`nav-link ${
                      currentPath == "/news/" && "active"
                    }`}
                  >
                    News
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    href="mailto:bbhsrobotics4654@gmail.com"
                    className={`nav-link ${
                      currentPath == "email" && "active"
                    }`}
                  >
                    Contact
                  </Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;