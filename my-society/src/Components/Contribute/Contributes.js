import React, { Component } from 'react'
import Contribute from './Contribute'
import Axios from "axios";

export default class Contributes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contributes: []
        }
    }


    componentWillMount = () => {

    }

    async GetContribution() {
        Axios.post("", this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.contributes.map(item => (
                        <Contribute
                            key={item.id}
                            idUser={item.idUser}
                            idSociety={item.idSociety}
                            image={item.image}
                            article={item.article}
                            date={item.date}
                        />
                    ))
                }
            </div>
        )
    }
}
