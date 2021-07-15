import React, { Component } from 'react'
import ContentSocieties from '../Components/Society/ContentSocieties'

import Item1 from '../Images/rap.PNG'
import Item2 from '../Images/food.PNG'

export default class MySocieties extends Component {
    render() {
        const societies = [{
            id: 1,
            name: "vive el rap",
            image: Item1
        },
        {
            id: 2,
            name: "comida",
            image: Item2
        }
        ]
        return (
            <div className="atom-societies">
                <ContentSocieties societies={societies} title="mis sociedades" />
            </div>
        )
    }
}