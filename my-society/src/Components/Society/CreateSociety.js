import React, { Component } from 'react'

export default class CreateSociety extends Component {
    render() {
        return (
            <div className="atom-new-society">
                <h4 className="atom-title">Es el momento de iniciar una sociedad</h4>
                <div className="form-group">
                    <label htmlFor="nameSociety">Nombre de la sociedad</label>
                    <input type="text" className="form-control" id="nameSociety" />
                </div>
                <div className="form-group">
                    <label htmlFor="descriptionSociety">Descripción de la sociedad</label>
                    <textarea className="form-control" id="descriptionSociety" rows="3"></textarea>
                </div>
                <div className="atom-contribution_btn right">
                    <input className="btn atom-btn--prymary btn-lg" type="button" value="Crear"
                        onClick={this.Guardar} />
                </div>
            </div>
        )
    }
}
