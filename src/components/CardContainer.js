import React from 'react'
import paintingData from '../data/paintings'

//Components
import { Card } from './Card'

export default class CardContainer extends React.Component {

 

    render(){ 

        return(
            <div className="row ml-3">
              { paintingData.map(paintingObj => <Card deletePainting={this.props.deletePainting} key={paintingObj.id} painting={paintingObj}/>) }
            </div>
        )
    }

}