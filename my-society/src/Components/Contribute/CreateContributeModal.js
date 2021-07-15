import React, { Component } from 'react'
import CreateContributions from './CreateContribution'
import Modal from '../Modal'
import ImageProfile from '../../Images/profile.png'

export default class CreateContributeModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPopup: false,
            imageProfile: ImageProfile
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        return (
            <div>
                <button className="btn atom-btn--prymary btn-lg"
                    onClick={this.togglePopup.bind(this)}>Crear Contribución</button>
                {
                    this.state.showPopup ?
                        <Modal>
                            <CreateContributions
                                idUser={this.props.idUser}
                                idSociety={this.props.idSociety}
                                image={this.state.imageProfile}
                                closePopup={this.togglePopup.bind(this)}
                                userName="Santiago"
                            /></Modal>
                        : null
                }
            </div>
        )
    }
}
