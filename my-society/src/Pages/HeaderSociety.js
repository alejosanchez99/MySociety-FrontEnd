import React, { Component } from "react";

export default class HeaderSociety extends Component {
  render() {
    return (
      <div className="atom-banner-society">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-6 d-flex">
                <h3 className="atom-title">{this.props.name}</h3>
                <div className="atom-president">
                  <div className="atom-icon_president"></div>
                  <p>{this.props.president}</p>
                </div>
              </div>
              <div className="col-12 d-flex align-items-center mt-3">
                <div className="atom-icon_team"></div>
                <div className="d-flex align-items-center">
                  <ul className="atom-featured-member">
                    {this.props.featuredMembers.map((item, index) => (
                      <li key={index}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12 mt-3">
                <p className="atom-society-description">
                  {this.props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
