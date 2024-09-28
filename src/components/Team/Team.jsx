import React from 'react';
import "./Team.css";
import { sds, asds, member1, member2, member3 } from "../../assets";

const Team = () => {
  return (
    <section id="teams">
      <div className="wrapper">
        <h2 className="team-header">OUR TEAM</h2>
        <div className="content-container">
          <div className="team-container">
            <div className="team">
              <img className="profile-image" src={sds} alt=""/>
              <div className="team-details">
                <div className="name">Reynaldo B. Mellorida</div>
                <div className="position">Schools Division Superintendent</div>
              </div>
            </div>

            <div className="team">
              <img className="profile-image" src={asds} alt=""/>
              <div className="team-details">
                <div className="name">Janette G. Veloso</div>
                <div className="position">Assistant Schools Division Superintendent</div>
              </div>
            </div>
          </div>
          <div className="team-member-container">
            <div className="team-member">
              <img className="profile-image" src={member1} alt=""/>
              <div className="team-details">
                <div className="name">Paul E. Arsolon</div>
                <div className="position">Information Technology Officer I</div>
              </div>
            </div>

            <div className="team-member">
              <img className="profile-image" src={member2} alt=""/>
              <div className="team-details">
                <div className="name">Eldito C. Loquinio </div>
                <div className="position">Administrative Officer II</div>
              </div>
            </div>

            <div className="team-member">
              <img className="profile-image" src={member3} alt=""/>
              <div className="team-details">
                <div className="name">Franklin N. Maynucas</div>
                <div className="position">Administrative Assistant III</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Team;