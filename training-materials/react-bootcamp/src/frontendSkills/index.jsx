import React, { useEffect } from "react";
import "./index.css";
import axios from "axios";

const FrontendSkills = () => {
  const [list, setList] = React.useState([]);
  const getFrontenSkills = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/skill`)
      .then(function (response) {
        setList(response.data.data.filter((el) => el.domain === "frontend"));
        console.log("here is the repsonse from the backend", response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    getFrontenSkills();
  }, []);

  return (
    <section id="frontSkills" className="skills">
      <div className="skills-title">
        <h2>Frontend Skills</h2>
      </div>
      <div className="skills-container">
        <div className="skills-field">
          <h2>Technologies</h2>
          {list.map((item, index) => (
            <div className="skill" key={index}>
              <img
                src={item.icon}
                alt="icon"
                style={{ borderRadius: "50%", width: "50px" }}
              />
              <div className="skill-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontendSkills;
