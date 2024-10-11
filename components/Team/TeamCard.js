import React from "react";

const teamData = [
  {
    image: "/images/team/team1.png",
    name: "Jocelyn Zheng",
    designation: "Admin President",
    aosDelay: "101",

    socialLinks: [],
  },
  {
    image: "/images/team/team2.png",
    name: "Lianne Ferentz",
    designation: "Build President",
    aosDelay: "200",

    socialLinks: [],
  },
  {
    image: "/images/team/team3.png",
    name: "Fiona Chen",
    designation: "Secretary",
    aosDelay: "300",

    socialLinks: [],
  },
  {
    image: "/images/team/team4.png",
    name: "Ian Goldfeld",
    designation: "Treasurer",
    aosDelay: "400",

    socialLinks: [],
  },
  {
    image: "/images/team/team5.png",
    name: "Jeffrey Kuo",
    designation: "Lead Programmer",
    aosDelay: "500",

    socialLinks: [],
  },
  {
    image: "/images/team/team6.png",
    name: "Alex Thompson",
    designation: "Public Relations Officer",
    aosDelay: "600",

    socialLinks: [],
  },
];

const TeamCard = () => {
  return (
    <>
      <section className="team-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {teamData &&
              teamData.map((value, i) => (
                <div
                  className="col-lg-3 col-sm-6"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-team active">
                    <div className="team-single-img">
                      <img src={value.image} alt="Image" />
                    </div>

                    <div className="team-content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>

                      <ul>
                        {value.socialLinks.map((value, i) => (
                          <li key={i}>
                            <a href={value.url} target="_blank">
                              <i className={value.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamCard;
