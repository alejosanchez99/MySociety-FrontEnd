import React, { Component } from 'react'

export default class Modal extends Component
{
    render(){
        return(
            <div className='popup'>
                <div className='popup_inner'>
                    {this.props.children}
                </div>
            </div>
            
        )
    }
}
