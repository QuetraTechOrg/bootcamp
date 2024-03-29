import React, { useEffect, useState } from "react";
import "./gallery.css";

const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const [containSelected, setContainSelected] = useState("");

  //TODO axios or fetch to retrieve these information from the database

  // Example POST method implementation:
  async function retrieveData(url = "") {
    // Default options are marked with *
    const response = await fetch(process.env.API_URL + url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleTestApi = (url) => {
    retrieveData(url).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  };

  const sectionsData = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Web",
      image:
        "https://atelierssud.ch/wp-content/uploads/2020/10/gestion-autonome-de-son-site-internet.jpg",
    },
    {
      id: 3,
      name: "Design",
      image:
        "https://img.freepik.com/photos-gratuite/ampoule-creative-abstraite-fond-bleu-brillant-ai-generative_188544-8090.jpg",
    },
    {
      id: 4,
      name: "Robotics",
      image:
        "https://cms.qut.edu.au/__data/assets/image/0020/918101/robot-4.jpg",
    },
  ];
  const dataWithoutAll = sectionsData.filter((el) => el.id !== 1);
  const allImagesLink = dataWithoutAll.map((item) => item.image);

  useEffect(() => {
    const imageToDisplay = sectionsData.filter(
      (el) => el.id == selectedSection
    )[0];
    setContainSelected(imageToDisplay.image);
  }, [selectedSection]);

  return (
    <div id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-select">
        {sectionsData.map((item) => (
          <span
            key={item.id}
            onClick={() => {
              setSelectedSection(item.id);
              //   setContainSelected(item.image)
            }}
            style={{
              opacity: `${selectedSection === item.id ? "100%" : "50%"}`,
            }}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="gallery-container">
        {selectedSection === 1 ? (
          <div style={{ display: "flex", gap: "1rem" }}>
            {allImagesLink.map((link, index) => (
              <img key={index} src={link} alt="imh" height={100} />
            ))}
          </div>
        ) : (
          <img src={containSelected} width={200} alt="description" />
        )}
      </div>
    </div>
  );
};

export default Gallery;
