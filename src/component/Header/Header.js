import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = { 
   };
   this.back = this.back.bind(this)
  }

  back(){
    //let back = document.getElementById("boton-atras")
    //back.setAttribute("visibility", 'hiden')
  }

  render(){
    return(
        <header id="header">
          <Link to={'/'}>
            <div id="boton-atras" onClick={this.back} className="link">
              <div id="back" > </div>
            </div>
          </Link>
        </header>
    )
  }
}
export default Header;
