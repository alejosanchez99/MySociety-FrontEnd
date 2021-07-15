import React, { Component } from "react";
import CardSociety from "./CardSociety";

export default class ContentSocieties extends Component {
  render() {
    return (
      <div className="atom-content-societies">
        <h1 className="atom-title">{this.props.title}</h1>
        <div className="atom-grid">
          {this.props.societies.map((item) => (
            <CardSociety
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
