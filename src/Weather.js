import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const apiKey = "63214c4281922e3bb72fdf12dada7734";
  
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
   return (
     <div className="Weather">
       <form>
         <div className="row">
           <div className="col-9">
             <input
               type="search"
               placeholder="Enter a City..."
               className="form-control"
               autoFocus="on"
             />
           </div>
           <div className="col-3">
             <input
               type="submit"
               value="Search"
               className="btn btn-primary w-100"
             />
           </div>
         </div>
       </form>
       <h1>Laval</h1>
       <ul>
         <li>Wednesday 07:00</li>
         <li>partly cloudy</li>
       </ul>
       <div className="row mt-3">
         <div className="col-6">
             <img
               src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
               alt="partly cloudy"
             />
               <span className="temperature">6</span>
               <span className="unit">˚C</span>
         </div>
         <div className="col-6">
           <ul>
             <li>Precipitation: 15%</li>
             <li>Humidity: 72%</li>
             <li>Wind: 13km/h</li>
           </ul>
         </div>
       </div>
     </div>
   );
}