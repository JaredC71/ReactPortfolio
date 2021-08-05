import React from "react";
import "../css/Portfolio.css";
const projects = [
  "./images/cinema.jpg",
  "./images/budgetTracker.PNG",
  "./images/dayPlanner.png",
  "./images/fitnessTracker.PNG",
  "./images/weather-dashboard-screenshot.png",
];

function Porfolio() {
  return (
    <div className="gallery">
      <div className="project-card" href="https://www.github.com/JaredC71">
        <p className='projectTitle'>Movie Trivia App</p>
        <img src={projects[0]} alt="picture of project" className="cardImg"></img>
        <div className="card-buttons">
          <button className="cardBtn" id="viewCodeBtn">
            <a href="https://github.com/sushistarlove/movie-trivia-jbg"> View Code</a>
          </button>
          <button className="cardBtn" id="viewProjectBtn">
            <a href="https://sushistarlove.github.io/movie-trivia-jbg/"> View Project</a>
          </button>
        </div>
      </div>
      <div className="project-card" href="https://www.github.com/JaredC71">
      <p className='projectTitle'>Budget Tracker App</p>
        <img src={projects[1]} alt="picture of project" className="cardImg"></img>
        <div className="card-buttons">
          <button className="cardBtn" id="viewCodeBtn">
            <a href="https://github.com/JaredC71/Budget-Tracker"> View Code</a>
          </button>
          <button className="cardBtn" id="viewProjectBtn">
            <a href="https://thawing-anchorage-09453.herokuapp.com/"> View Project</a>
          </button>
        </div>
      </div>
      <div className="project-card" href="https://www.github.com/JaredC71">
      <p className='projectTitle'>Day Planner App</p>
        <img src={projects[2]} alt="picture of project" className="cardImg"></img>
        <div className="card-buttons">
          <button className="cardBtn" id="viewCodeBtn">
            <a href="https://github.com/JaredC71/Day-Planner"> View Code</a>
          </button>
          <button className="cardBtn" id="viewProjectBtn">
            <a href="https://jaredc71.github.io/Day-Planner/"> View Project</a>
          </button>
        </div>
      </div>
      <div className="project-card" href="https://www.github.com/JaredC71">
      <p className='projectTitle'>Fitness Tracker App</p>
        <img src={projects[3]} alt="picture of project" className="cardImg"></img>
        <div className="card-buttons">
          <button className="cardBtn" id="viewCodeBtn">
            <a href="https://github.com/JaredC71/workout-tracker"> View Code</a>
          </button>
          <button className="cardBtn" id="viewProjectBtn">
            <a href="https://rocky-escarpment-93802.herokuapp.com/"> View Project</a>
          </button>
        </div>
      </div>
      <div className="project-card" href="https://www.github.com/JaredC71">
      <p className='projectTitle'>Weather Dashboard App</p>
        <img src={projects[4]} alt="picture of project" className="cardImg"></img>
        <div className="card-buttons">
          <button className="cardBtn" id="viewCodeBtn">
            <a href="https://github.com/JaredC71/Weather-Dashboard"> View Code</a>
          </button>
          <button className="cardBtn" id="viewProjectBtn">
            <a href="https://jaredc71.github.io/Weather-Dashboard/"> View Project</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
