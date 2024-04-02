import { Fragment } from "react";
import "./App.css";
import NavBar from "./navbar/NavBar";
import Gallery from "./gallery/Gallery";
import FrontendSkills from "./frontendSkills";
import BackendSkills from "./backendSkills";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Gallery />
      <FrontendSkills />
      <BackendSkills />
    </Fragment>
  );
}

export default App;
