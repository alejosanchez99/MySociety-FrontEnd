import React, { Component } from 'react'
import Access_Api from '../Utilities/urls'
import Axios from 'axios'
import JoinSociety from './JoinSociety'
import RapImage from '../Images/rap.PNG'
import HeaderSociety from './HeaderSociety'
import Contributes from '../Components/Contribute/Contributes'
import CreateContributeModal from '../Components/Contribute/CreateContributeModal'

export default class Society extends Component {
    constructor(props) {
        super(props)

        this.state = {
            idSociety: 1,
            idUser: 1,
            belongsSociety: true,
            image: RapImage,
            name: "viva el rap",
            president: "Andres Felipe",
            featuredMembers: ["Kevin Suarez", "Alejandro Sanchez", "Diego Correa"],
            description: "El origen del rap es en Estados Unidos, se inició en los barrios de las grandes Urbes, tales como el bronx de New York, tiene tendencias artisticas, entre ellas incluye el Graffiti.",
            contributes: []
        }
    }

    componentWillMount = () => {
        this.GetSociety();
    }

    GetSociety = () => {
        /*Axios.get(Access_Api.GET_SOCIETY)
                    .then(res => {
                        const persons = res.data;
                        this.setState({ persons });
                    })
                    */
    }

    JoinSociety = () => {
        /*Axios.post(Access_Api.GET_SOCIETY)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
        this.state.idSociety;
        this.state.idUser;
            */

        console.log(this.state);
    }

    render() {
        let content;
        let content2;

        if (this.state.belongsSociety) {
            content = <CreateContributeModal idUser={this.state.idUser} idSociety={this.state.idSociety} />;
            content2 = <Contributes idUser={this.state.idUser} idSociety={this.state.idSociety} />;
        }
        else {
            content = <JoinSociety joinSociety={this.JoinSociety.bind(this)} />;
            content2 = null;
        }

        console.log(content);

        return (
            <div className="col-12">
                <div className="atom-society">
                    <HeaderSociety
                        image={this.state.image}
                        name={this.state.name}
                        president={this.state.president}
                        featuredMembers={this.state.featuredMembers}
                        description={this.state.description}
                    />

                    {content}
                    {content2}
                </div>
            </div>
        )
    }
}