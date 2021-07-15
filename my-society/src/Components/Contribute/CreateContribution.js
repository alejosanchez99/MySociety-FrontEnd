import React, { Component } from "react";
//import Access_Api from "../Utilities/urls";
import Axios from "axios";


export default class CreateContribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: this.props.idUser,
      idSociety: this.props.idSociety,
      image: this.props.image,
      article: "",
    };
  }

  async saveContribution() {
    console.log(this.state);
    /*
    Axios.post("/user", this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      */
  }


  render() {
    return (
      <div className="col-12">
        <form>
          <div className="atom-contribution">
            <div className="atom-contribution_header">
              <img src={this.state.image} alt="name" />
              <h1 className="atom-title">{this.props.userName}</h1>
            </div>
            <div className="atom-contribution_btn_close">
              <button type="button" className="atom-btn-close" aria-label="Close" onClick={this.props.closePopup}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="atom-contribution_comment">
              <div className="form-group">
                <textarea
                  onChange={e => this.setState({ nombre: e.target.value })}
                  className="form-control"
                  id="article"
                  placeholder="Escribe a continuación tu aporte:"
                ></textarea>
              </div>
            </div>
            <div className="atom-contribution_btn right">
              <button className="btn atom-btn--prymary btn-lg" type="submit"
                onClick={this.saveContribution}>
                Aportar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
