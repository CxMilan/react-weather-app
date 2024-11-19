import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Laval" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/98761-catherine-milanetti?_gl=1*1tcyvhp*_up*MQ..&gclid=Cj0KCQiA88a5BhDPARIsAFj595i3pU1pbWYp1hhXx90YjcRe13g6VldrIvEKEt-Kh8bdX3zX0hUhjwEaAhuFEALw_wcB"
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
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://roaring-kulfi-fbb967.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
