import React from "react";

const teamData = [
  {
    image: "/images/team/erk.jpeg",
    name: "Eric Chen",
    designation: "President",
    aosDelay: "100",
    socialLinks: [],
  },
  {
    image: "/images/team/sash.jpeg",
    name: "Sasha Harra",
    designation: "Hardware Officer",
    aosDelay: "150",
    socialLinks: [],
  },
  {
    image: "/images/team/smiley.png",
    name: "Noah Sausen",
    designation: "Software Officer",
    aosDelay: "200",
    socialLinks: [],
  },
  {
    image: "/images/team/smiley.png",
    name: "Iris Chen",
    designation: "Public Relations Officer",
    aosDelay: "250",
    socialLinks: [],
  },
    {
    image: "/images/team/smiley.png",
    name: "Cynthia Chen",
    designation: "Secretary",
    aosDelay: "300",
    socialLinks: [],
  },
  {
    image: "/images/team/smiley.png",
    name: "Isaac Held",
    designation: "Treasurer",
    aosDelay: "350",
    socialLinks: [],
  },
];

const TeamCard = () => {
  return (
    <>
      <section className="team-area ptb-100">
        <div className="container">
          <h1 style={{paddingBottom: '1rem'}}>Meet the Board</h1>
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
