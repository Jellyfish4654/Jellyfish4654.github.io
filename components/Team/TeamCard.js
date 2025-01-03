import React from "react";

const teamData = [
  {
    image: "/images/team/jocelyn.jpeg",
    name: "Jocelyn Zheng",
    designation: "Admin President",
    aosDelay: "101",
    socialLinks: [],
  },
  {
    image: "/images/team/e.png",
    name: "Lianne Ferentz",
    designation: "Build President",
    aosDelay: "150",
    socialLinks: [],
  },
  {
    image: "/images/team/martin.jpeg",
    name: "Martin Ayala",
    designation: "Secretary",
    aosDelay: "200",
    socialLinks: [],
  },
  {
    image: "/images/team/sash.jpeg",
    name: "Sasha Harra",
    designation: "Treasurer",
    aosDelay: "250",
    socialLinks: [],
  },
  {
    image: "/images/team/e.png",
    name: "Iris Chen",
    designation: "Public Relations Officer",
    aosDelay: "300",
    socialLinks: [],
  },
    {
    image: "/images/team/abigail.jpeg",
    name: "Abigail Weintraub",
    designation: "⠀",
    aosDelay: "350",
    socialLinks: [],
  },
  {
    image: "/images/team/andy.jpeg",
    name: "Andy Montvelisky",
    designation: "⠀",
    aosDelay: "400",
    socialLinks: [],
  },
  {
    image: "/images/team/erk.jpeg",
    name: "Eric Chen",
    designation: "⠀",
    aosDelay: "450",
    socialLinks: [],
  },
  {
    image: "/images/team/noah.jpeg",
    name: "Noah Sausen",
    designation: "⠀",
    aosDelay: "500",
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
                  data-aos-duration="120"
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
