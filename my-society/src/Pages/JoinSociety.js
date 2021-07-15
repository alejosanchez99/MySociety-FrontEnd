import React, { Component } from "react";
import imgJoin from "../Images/Icons/join-01.png";

export default class JoinSociety extends Component {
  render() {
    return (
      <div className="atom-join_society">
        <div className="col-6 atom-join_text">
          <p>
            <span>UPS...</span>
            No perteneces a esta sociedad, pero puedes hacerlo dando clic en el
            botón
          </p>
          <button
            className="btn atom-btn--prymary btn-lg"
            type="submit"
            onClick={this.props.joinSociety}
          >
            Unirme
          </button>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img src={imgJoin} alt="" />
        </div>
      </div>
    );
  }
}
