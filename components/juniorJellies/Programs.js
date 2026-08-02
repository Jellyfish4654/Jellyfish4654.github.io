import React from "react";
import Link from "next/link";

const JJPrograms = () => {
  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };

  return (
    <>
      <section className="industries-area pb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Programs</h2>
          </div>

          <div className="tab industries-list-tab">
            <div className="row align-items-center">
              <div className="col-lg-3">
                {/* Tabs navs */}
                <ul className="tabs">
                  <li
                    className="current"
                    onClick={(e) => openTabSection(e, "tab1")}
                  >
                    <span>
                      <i className="flaticon-engineer"></i>
                      <h3>Junior Jellies Engineering</h3>
                      <p>Engineering</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab2")}>
                    <span>
                      <i className="flaticon-java"></i>
                      <h3>Junior Jellies Java</h3>
                      <p>Computer Science</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab3")}>
                    <span>
                      <i className="flaticon-robot"></i>
                      <h3>Junior Jellies Robotics</h3>
                      <p>Legacy Program</p>
                    </span>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab4")}>
                    <span>
                      <i className="flaticon-python"></i>
                      <h3>Junior Jellies Python</h3>
                      <p>Legacy Program</p>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-9">
                <div className="tab_content">
                  {/* Tab item #1 */}
                  <div id="tab1" className="tabs_item">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-img left-img">
                          <img src="/images/jj1.png" alt="Image" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Junior Jellies Engineering</h3>
                          <p>
                          Junior Jellies Engineering is a flagship program of our team that has been 
                          developed based on feedback and experience gained through our other Junior Jellies 
                          initiatives. This six-week program is designed to introduce 4th and 5th grade 
                          students to the engineering opportunities available at the district's middle 
                          and high schools. Every week, a new project is introduced, providing students 
                          with a firsthand demonstration of a new engineering concept, such as basic physics 
                          or electrical engineering. Our team strives to instill healthy competition within 
                          our students, as we believe it is crucial for them to learn the principles of 
                          Gracious Professionalism. By promoting kindness, enthusiasm, and respect, even 
                          in the face of challenging circumstances, we aim to cultivate a positive learning 
                          environment where students can thrive. We maintain a 2:1 student/teacher ratio, 
                          with each instructor matched with two Junior Jellies. This approach fosters 
                          cooperation and provides focused attention to each student. Our greatest source 
                          of pride is the community that we have built through this program. We strive to 
                          ignite a passion for engineering among our students, and the acceptance and 
                          creativity they develop are the most rewarding and valuable aspects of our team endeavor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab item #2 */}
                  <div id="tab2" className="tabs_item">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Junior Jellies Java</h3>
                          <p>
                          Junior Jellies Java is designed to teach middle school students about fundamental 
                          concepts of Java. It is facilitated by highly motivated and talented high school 
                          students who are passionate about computer science. Given that our district currently 
                          lacks any computer science courses for middle school students, we recognized an 
                          opportunity to fill this critical gap in the curriculum. Through Junior Jellies Java, 
                          we aim to fill this void and inspire students to pursue computer science and STEM fields 
                          in the future. We strongly believe that by introducing these basic concepts at an early 
                          age, we can spark a lifelong interest and passion for computer science in young minds. 
                          By providing high-quality instruction in a fun and engaging way, we hope to attract a 
                          wide range of students who will not only benefit from the program but also help 
                          support our team’s activities.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-img right-img">
                          <img src="/images/jj2.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab item #3 */}
                  <div id="tab3" className="tabs_item">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-img left-img">
                          <img src="/images/jj3.png" alt="Image" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Junior Jellies Robotics</h3>
                          <p>
                          Junior Jellies Robotics was our team’s first Junior Jellies program. 
                          The curriculum was modeled after FLL (FIRST LEGO League) using LEGO Robotics, 
                          offering a challenge similar to those issued in FLL and allowing Junior Jellies 
                          to work on their robot over the course of seven weeks. On the final day of the 
                          program, students competed with their robot for awards in various categories that 
                          closely mirrored those of FLL competitions. Junior Jellies Robotics provided an 
                          excellent opportunity for students to develop their knowledge of basic robotics concepts, 
                          while also learning essential skills such as critical thinking, problem-solving, 
                          nd teamwork. In addition to promoting STEM education, Junior Jellies Robotics served 
                          as a means for our team to connect with younger students in our community, fostering a 
                          passion for STEM and encouraging students to explore their interests in related fields. 
                          Many of our current Jellyfish members were first introduced to robotics as Junior Jellies 
                          participants, and they are now continuing the cycle as instructors for the next generation 
                          of young engineers. We are proud of the success of our first Junior Jellies program, and 
                          we remain committed to offering programs that inspire the next generation of STEM leaders.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tab item #4 */}
                  <div id="tab4" className="tabs_item">
                    <div className="row  align-items-center">
                      <div className="col-lg-6">
                        <div className="industries-content">
                          <h3>Junior Jellies Python</h3>
                          <p>
                          During the 2020-21 school year with the pandemic, we created the Junior Jellies 
                          Python program to teach middle school students fundamentals about Python. This 
                          was an ideal way to virtually connect with our community and fundraise for the team. 
                          The highlight of both programs is their staggered curriculum developed to scaffold 
                          and accommodate students with varied coding experience. This program has been replaced 
                          by Junior Jellies Java. By introducing Java to the district’s students before they 
                          enter high school, we hope to garner more interest in programming for the robotics team. 
                          In the past, we have struggled with finding programmers as team members had little to 
                          no experience coding due to a lack of experience and exposure.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="industries-img right-img">
                          <img src="/images/jj4.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JJPrograms;