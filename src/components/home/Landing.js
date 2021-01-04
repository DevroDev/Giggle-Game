import React from "react";
import { Link } from "react-router-dom";
//components

const Landing = () => {
  return (
    <div className="container-fluid landing">
      <div className="container landing-box text-center">
        <div className="landing-down-line"></div>
        <p>Giggle Brain Fucked Memes</p>
        <div className="landing-up-line"></div>
        <h2>
          Leave Your <span>Myanmar</span> <br /> Minty not Mediciney
        </h2>
        <h4>
          Far far away,behind the word mountains, far from the countries Vokalia
          and Consonantia,there live the blind texts.
        </h4>
        <div className="py-5">
          <Link to="/" className="landing-button-1 text- mr-2 text-light">
            Join Us
          </Link>
          <Link to="/" className="landing-button-2 ml-2 text-light">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
