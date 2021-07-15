import React, { Component } from 'react'
import ContentSocieties from '../Components/Society/ContentSocieties'

import Item3 from '../Images/music.PNG'
import Item4 from '../Images/read.PNG'
import Item5 from '../Images/switch.PNG'
import Item6 from '../Images/baloncestoFem.PNG'

export default class AllSocieties extends Component {
    render() {
        const societies = [
            {
                id: 3,
                name: "ténica vocal",
                image: Item3
            },
            {
                id: 4,
                name: "lectura",
                image: Item4
            },
            {
                id: 5,
                name: "nintendo switch",
                image: Item5
            },
            {
                id: 6,
                name: "baloncesto",
                image: Item6
            }
        ]
        return (
            <div className="atom-societies">
                <ContentSocieties societies={societies} title="todas las sociedades" />
            </div>
        )
    }
}
