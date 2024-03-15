import React from "react";

export const ButtonComponent = ({ student }) => {
  console.log(student);
  return (
    <div className="card">
      <div
        style={{
          //   width: "40%",
          padding: "1rem",
          margin: "2em auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          border: "1px solid black",
          marginLeft: "1rem",
        }}
      >
        <span>Nom: {student.name}</span>
        <span>Niveau: {student.level}</span>
        <span>Moyenne: {student.moyenne}</span>
      </div>
    </div>
  );
};
