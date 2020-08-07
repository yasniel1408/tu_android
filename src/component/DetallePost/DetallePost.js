import React from 'react';
import './DetallePost.scss';

class DetallePost extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
   };
  }


  render(){
    return(
      <dev>
        {this.props.match.params.post.id}
      </dev>
    )
  }
}
export default DetallePost;
