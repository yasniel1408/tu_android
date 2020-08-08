import React from 'react';
import './Header.scss';

class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = { 
   };
   this.back = this.back.bind(this)
  }

  back(){
    //this.props.history.push('/')
    alert("OKOKOK")
  }


  render(){
    return(
        <header id="header">
          <div id="boton-atras" className="link">
            <div id="back" onClick={this.back} > </div>
          </div>
        </header>
    )
  }
}
export default Header;
