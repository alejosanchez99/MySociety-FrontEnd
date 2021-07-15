import React, { Component } from "react";
import Access_Api from "../../Utilities/urls";
import Axios from "axios";
import Score from "./Score"
import imgProfile from "../../Images/comment-dots@2x.png";

export default class Contribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: this.props.idUser,
      idSociety: this.props.idSociety,
      image: this.props.image,
      article: this.props.article,
      date: this.props.date
    };
  }

  render() {
    return (
      <div className="col-12">
        <form>
          <div className="atom-contribution">
            <div className="atom-contribution_header">
              <div>
                <img src={this.state.image} alt="name" />
              </div>
              <div className="atom-contribution_info">
                <h1 className="atom-title">{this.props.userName}</h1>
                <p className="atom-contribution_info_p">{this.state.date}</p>
                <Score idContribution={1} idSociety={1} idUser={1} score={0} />
              </div>
            </div>
            <div className="atom-contribution_article">
              <div className="atom-contribution_icon">
                <img src={imgProfile} alt="name" />
              </div>
              <div className="d-flex">
                <p>
                  {this.state.article}
                </p>
              </div>

            </div>
          </div>
        </form>
      </div>
    );
  }
}
