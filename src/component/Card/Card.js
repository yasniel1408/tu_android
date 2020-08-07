import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      foto:""
   };
  }

  async componentDidMount(){
   await axios.get("https://jorgen.cubava.cu/wp-json/wp/v2/media/"+this.props.post.featured_media)
    .then(response=> this.setState({foto: response.data}))
    .catch(err=>console.error(err))
  }

  render(){
    return(
        <div className="card">
          <Link className="link" 
            to={{
              pathname: '/detallepost/'+this.props.post,
            }}
          >
            <img-card>
              <img 
                src={this.state.foto.source_url}
                alt={this.state.foto.alt_text}
                width="100%"
              />
            </img-card>
            <header-card>
                <strong>{this.props.post.title.rendered}</strong>
            </header-card>
            <body-card>
                <div dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }} />
                <div>{this.props.post.date}</div>
            </body-card>
            {console.log(this.state.foto)}
            </Link>
        </div>
    )
  }
}
export default Card;