import React from 'react';
import Project from "../components/Project/index.js";
import EatDaBurgerImage from "../assets/images/EatDaBurgerScreenshot.jpeg";
import BudgetTrackerImage from "../assets/images/BudgetTracker.jpeg";
import FitnessTrackerImage from "../assets/images/FitnessTracker.jpeg";
import NoteTakerImage from "../assets/images/NoteTaker.jpeg";
import Project1Image from "../assets/images/Project1.jpeg";
import Project2Image from "../assets/images/Project2.jpeg";

function Portfolio() {
  return (
    <div className="row border content">
      <div className="col-12">
        <h2>Portfolio</h2>
        <div className="row my-3">
          <Project
            key={0}
            name="Note Taker"
            image={NoteTakerImage}
            site="https://calm-scrubland-96018.herokuapp.com/"
            github="https://github.com/jguerra21/note-taker"
          />
          <Project
            key={1}
            name="Eat Da Burger"
            image={EatDaBurgerImage}
            site="https://desolate-river-06814.herokuapp.com/index"
            github=" https://github.com/jguerra21/burger"
          />
      </div>  

        <div className="row my-3">
          <Project
            key={2}
            name="Online/Offline Budget Tracker"
            image={BudgetTrackerImage}
            site="https://evening-coast-49268.herokuapp.com/index.html"
            github="https://github.com/jguerra21/progressive-budget"
          />

          <Project
            key={3}
            name="Workout Tracker"
            image={FitnessTrackerImage}
            site="https://safe-ocean-94082.herokuapp.com/?id=5ea1e4fe539da40017aef952"
            github="https://github.com/jguerra21/workout-tracker"
          />
        </div>

        <div className="row my-3">
          <Project
            key={4}
            name="Group Project 2"
            image={Project2Image}
            site="https://salty-sea-30078.herokuapp.com/login"
            github="https://github.com/jguerra21/Book-Line-And-Sinker"
          />
          <Project
            key={5}
            name="Group Project 1"
            image={Project1Image}
            site="https://jguerra21.github.io/covid-19-info-tracker/"
            github=" https://github.com/jguerra21/covid-19-info-tracker"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
