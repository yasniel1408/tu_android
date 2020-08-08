import React, { Suspense } from 'react';
import './Posts.scss';
import axios from 'axios'
import cargar from '../assets/load-a.png'

const loading = () => <div className="imgr">
  <img src={cargar} width='40' alt="load"/>
</div>
const Card = React.lazy(() => import('../component/Card/Card'));

class Posts extends React.Component{
  constructor() {
    super();
    this.state = { 
        posts:[],
     };
     this.capturarCatidadPost = this.capturarCatidadPost.bind(this);
  }

  async componentDidMount(){
    let cat = localStorage.getItem("catidadDePost")
    document.getElementById("inputCantPost").value = cat
    if(cat>0)
    await axios.get('https://jorgen.cubava.cu/wp-json/wp/v2/posts?per_page='+cat
    )
        .then(response=> this.setState({posts: response.data}))
        .catch(err=>console.error(err))
  }

  renderListado = (post) => 
  <Suspense key={post.id} fallback={loading()}>
    <Card 
      post={post} 
    />
  </Suspense>

  capturarCatidadPost(e){
    e.preventDefault();
    localStorage.setItem("catidadDePost",e.target.cant.value)
    if(e.target.cant.value>0)
    axios.get('https://jorgen.cubava.cu/wp-json/wp/v2/posts?per_page='+e.target.cant.value)
        .then(response=> this.setState({posts: response.data}))
        .catch(err=>console.error(err))
  }
  
  render(){
    const postsList = this.state.posts
    return(
        <div className="cardPost">
          <form onSubmit={this.capturarCatidadPost} id="formCargar">
            <input type="number" id="inputCantPost" placeholder="Cantidad Post" name="cant"/>
            <input type="submit" value="Cargar"/>
          </form>
            {postsList.map((post) => this.renderListado(post))}
        </div>
    )
  }
}
export default Posts;