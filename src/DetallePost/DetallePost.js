import React from 'react';
import './DetallePost.scss';

class DetallePost extends React.Component{
  render(){
    return(
      <div id="contenido">
          <title-detalle>
              <strong>{this.props.location.state.post.title.rendered}</strong>
          </title-detalle>
          <body-continer>
             <div dangerouslySetInnerHTML={{ __html: this.props.location.state.post.content.rendered }} width="100%"/>
          </body-continer>
      </div>
    )
  }
}
export default DetallePost;
