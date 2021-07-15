import React, { Component } from 'react'
import Access_Api from '../../Utilities/urls'
import Axios from 'axios'

export default class Score extends Component {
    constructor(props) {
        super(props)

        this.state = {
            idContribution: this.props.idContribution,
            idSociety: this.props.idSociety,
            idScoringUser: this.props.idUser,
            score: this.props.score
        }

        this.SaveScore = this.SaveScore.bind(this);
    }

    componentDidMount = function () {
        if (this.state.score !== 0) {
            const name = "score" + this.state.score;
            document.getElementById(name).checked = true;
        }
    }

    async SaveScore(score) {
        this.setState({ score: score });

        const body = {
            idContribution: this.state.idContribution,
            idSociety: this.state.idSociety,
            idScoringUser: this.state.idScoringUser,
            score: score
        }

        /*
                Axios.post(Access_Api.POST_SCORE, body)
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
            <div>
                <div className="score">
                    <input id="score5" type="radio" name="stars"
                        onChange={() => this.SaveScore(5)} />
                    <label htmlFor="score5">★</label>
                    <input id="score4" type="radio" name="stars"
                        onChange={() => this.SaveScore(4)} />
                    <label htmlFor="score4">★</label>
                    <input id="score3" type="radio" name="stars"
                        onChange={() => this.SaveScore(3)} />
                    <label htmlFor="score3">★</label>
                    <input id="score2" type="radio" name="stars"
                        onChange={() => this.SaveScore(2)} />
                    <label htmlFor="score2">★</label>
                    <input id="score1" type="radio" name="stars"
                        onChange={() => this.SaveScore(1)} />
                    <label htmlFor="score1">★</label>
                </div>
            </div>
        )
    }
}
