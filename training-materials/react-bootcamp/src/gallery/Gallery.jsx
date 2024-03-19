import React, { useState } from "react";
import "./gallery.css";

const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState(1);
  const [containSelected, setContainSelected] = useState("non vide");

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

  return (
    <div id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-select">
        {sectionsData.map((item) => (
          <span
            key={item.id}
            onClick={() => {
              setSelectedSection(item.id);
              setContainSelected(item.image);
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
