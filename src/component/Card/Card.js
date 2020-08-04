import React from 'react';
import './Card.scss';

class Card extends React.Component{
  render(){
    return(
        <div className="card">
            <img-card>
                <img src={'assets/android-baterias.jpg'} />
            </img-card>
            <header-card>
                <strong>Texto de Ejemplo</strong>
            </header-card>
            <body-card>
                hrgb aeibfg aiebfaesva posbvfi paisbdf vpibas dpfivba dpsfivb padifbg pdaibfv pdib vfidb v
            </body-card>
        </div>
    )
  }
}
export default Card;