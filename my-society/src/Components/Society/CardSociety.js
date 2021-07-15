import React, { Component } from "react";

export default class CardSociety extends Component {
  render() {
    return (
      <div className="col-12 col-md-4 p-0">
        <div className="atom-card_society">
          <a href="#" className="atom-link-society">
            <div className="card atom-card-society">
              <div className="atom-card-society-img">
                <img
                  src={this.props.image}
                  className="card-img-top"
                  alt={this.props.name}
                />
              </div>
              <div className="card-body atom-card-body-society">
                <div className="card-text">
                  <h3 className="atom-title">{this.props.name}</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
