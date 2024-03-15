import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ButtonComponent } from "./ButtonComponent";

function App() {
  const [count, setCount] = useState(100);

  const bootcampData = [
    {
      name: "Youssri",
      level: "3e année TIC",
      moyenne: 18,
    },
    {
      name: "Dhouha",
      level: "3e année LBC",
      moyenne: 19,
    },
    {
      name: "Eya",
      level: "3e année LBC",
      moyenne: 10,
    },
    {
      name: "Malik",
      level: "3e année TIC",
      moyenne: 63,
    },
    {
      name: "Hiba",
      level: "2e année EB",
      moyenne: 15,
    },
  ];
  console.log(bootcampData);

  return (
    <Fragment>
      <h1>User information</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {bootcampData.map((student, index) => (
          <ButtonComponent student={student} key={index} />
        ))}
      </div>
    </Fragment>
  );
}

export default App;
