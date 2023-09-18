import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import App from "./App";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <WorkExperience>
        <Company name="Microsoft" from_date="Jan2020 " to_date="May2021" />
        <Company name="Netflix" from_date="June 2021" to_date="Aug 2021" />
        <Company name="NASA" from_date="September 2021" to_date="Present" />
      </WorkExperience>

      <Portfolio>
        <Project
          image="https://picsum.photos/id/0/200/300"
          description="Laptop on my Office"
        />
        <Project image="https://picsum.photos/id/420/200/300" description="" />
        <Project image="https://picsum.photos/id/45/200/300" description="" />
        <Project image="https://picsum.photos/id/36/200/300" description="" />
      </Portfolio>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <h2> News Feed </h2>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function Company(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.name}</span>
        <span className="from">From: {props.from_date}</span>
        <span className="until">To: {props.to_date}</span>
      </h2>
      <p>
        lorem ipsum doloret sindaya grava
        grnboernbnerpbinebineibwribnerinbeipnbeinbenibeinbeoinboiebne
      </p>
    </li>
  );
}

function Portfolio(props) {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">{props.children}</div>
    </div>
  );
}

function Project(props) {
  let image;
  if (!props.image) {
    image = "https://randomuser.me/api/portraits/men/23.jpg";
  } else {
    image = props.image;
  }

  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt="" />
      </div>
      <div className="project-description">
        <p>
          lorem ipsum doloret sindaya grava grnboernbnerpbin
          ebineibwribnerinbeipn beinbenibei nbeoinboiebne
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
