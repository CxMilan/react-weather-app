import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/98761-catherine-milanetti"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cate Milan
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/CxMilan/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
