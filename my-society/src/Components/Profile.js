import React, { Component } from "react";
import imgProfile2 from "../Images/profile.png";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="atom-card atom-card_profile">
        <div>
          <img src={imgProfile2} alt="" />
          <h1 className="atom-title">Carlos Arturo</h1>
          <p className="atom-text">Presidente</p>
        </div>

        <div className="atom-card_metrics">
          <div className="d-flex flex-direction-columns">
            <span>630</span>
            <p>aportes</p>
          </div>
          <div className="d-flex flex-direction-columns">
            <span>22</span>
            <p>sociedades</p>
          </div>
          <div className="d-flex flex-direction-columns">
            <span>10</span>
            <p>presidencia</p>
          </div>
        </div>

        <div className="atom-card_subcategory">
          <h2>Actividad</h2>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Profile;
