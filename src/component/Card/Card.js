import React, { Suspense } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import axios from 'axios'
import cargar from '../../assets/load-a.png'

const loading = () => <div className="">
  <img src={cargar} width='40' alt="load"/>
</div>


class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      foto:[],
      fotoBase64: ""
   };

  }

  async componentDidMount(){
    let image = localStorage.getItem(this.props.post.featured_media)
    if(image){
      this.setState({fotoBase64: image})
      this.cargarImageBase64()
    }else{
      await axios.get("https://jorgen.cubava.cu/wp-json/wp/v2/media/"+this.props.post.featured_media)
      .then((response) =>  {
        this.setState({foto: response.data})
        this.convertirImageBase64() 
      })
      .catch(err=>console.error(err))
    }
  }

  convertirImageBase64(){
    // let img = document.getElementById(this.state.foto.id)
    // var canvas = document.createElement("canvas");
    // canvas.width = img.width;
    // canvas.height = img.height;

    // var ctx = canvas.getContext("2d");
    // ctx.drawImage(img, 0, 0);

    // var dataURL = ctx.canvas.toDataURL("image/png");

    // localStorage.setItem(this.props.post.featured_media, dataURL.replace(/^data:image\/(png|jpg);base64,/, "")); 
  }

  cargarImageBase64(){
        // var picture = localStorage.getItem(this.props.post.featured_media);
        // var image = document.getElementById(this.state.foto.id);
        // image.src = "data:image/png;base64," + picture;
  }

  render(){
    return(
        <div className="card" >
          <Link className="link" 
            to={{
              pathname: '/detallepost',
              state: {
                post: this.props.post
              }
            }}
          >
            <img-card>
                <Suspense fallback={loading()}>
                <img 
                  src={this.state.foto.source_url}
                  id={this.state.foto.id}
                  alt={this.state.foto.alt_text}
                  width="100%"
                />
                </Suspense>
            </img-card>
            <header-card>
                <strong>{this.props.post.title.rendered}</strong>
            </header-card>
            <body-card>
                <div dangerouslySetInnerHTML={{ __html: this.props.post.excerpt.rendered }} />
                <div>{this.props.post.date}</div>
            </body-card>
            
            </Link>
        </div>
    )
  }
}
export default Card;