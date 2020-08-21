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
        categories:[]
     };
     this.capturarCatidadPost = this.capturarCatidadPost.bind(this);
     this.search = this.search.bind(this);
     this.paginas = this.paginas.bind(this);
     this.categorias = this.categorias.bind(this);
  }

  async componentDidMount(){
    let postsGuardados = JSON.parse(localStorage.getItem("posts"))
    if(postsGuardados)
    this.setState({posts: postsGuardados})

    let categoriasGuardadas = JSON.parse(localStorage.getItem("categorias"))
    if(categoriasGuardadas){
      this.setState({categories: categoriasGuardadas})
    }else{
      await axios.get('https://jorgen.cubava.cu/wp-json/wp/v2/categories')
      .then((response) =>  {
        this.setState({categories: response.data})
        localStorage.setItem("categorias", JSON.stringify(this.state.categories))
      })
      .catch(err=>console.error(err))
    }
  }

  renderListado = (post) => 
  <Suspense key={post.id} fallback={loading()}>
    <Card 
      post={post} 
    />
  </Suspense>

  categoriasRender = (cat) => 
  <Suspense key={cat.id} fallback={loading()}>
    <option value={cat.id}>{cat.name}</option>
  </Suspense>

//FILTROS
  capturarCatidadPost(e){
    e.preventDefault();
    if(e.target.cant.value>0)
    axios.get('https://jorgen.cubava.cu/wp-json/wp/v2/posts?per_page='+e.target.cant.value)
        .then((response) =>  {
          this.setState({posts: response.data})
          localStorage.setItem("posts", JSON.stringify(this.state.posts))
        })
        .catch(err=>console.error(err))
  }
  search(e){
    e.preventDefault();
    if(e.target.search.value.length>0)
    axios.get('https://jorgen.cubava.cu/wp-json/wp/v2/posts?search='+e.target.search.value)
    .then((response) => {
      this.setState({posts: response.data})
      localStorage.setItem("posts", JSON.stringify(this.state.posts))
    })
    .catch(err=>console.error(err))
  }
  paginas(e){
    e.preventDefault();
    if(e.target.page.value.length>0)
    axios.get('https://jorgen.cubava.cu/wp-json/wp/v2/posts?page='+e.target.page.value)
    .then((response) =>  {
      this.setState({posts: response.data})
      localStorage.setItem("posts", JSON.stringify(this.state.posts))
    })
    .catch(err=>console.error(err))
  }
  categorias(e){
    e.preventDefault();
    if(e.target.select.value.length>0)
    axios.get('https://jorgen.cubava.cu/wp-json/wp/v2/posts?categories='+e.target.select.value)
    .then((response) =>  {
      this.setState({posts: response.data})
      localStorage.setItem("posts", JSON.stringify(this.state.posts))
    })
    .catch(err=>console.error(err))
  }
  
  render(){
    return(
        <div className="cardPost">
          <h3>Aplica uno de los "Filtros de Posts":</h3>
          <div>
            <form onSubmit={this.capturarCatidadPost} id="formCargar">
              <input type="number" id="inputCantPost" placeholder="Cantidad Post" name="cant"/>
              <input type="submit" value=">"/>
            </form>
            <form onSubmit={this.search} id="formSearch">
              <input type="text" id="search" placeholder="Search" name="search"/>
              <input type="submit" value=">"/>
            </form>
            <form onSubmit={this.categorias} id="formCategorias">
              <select type="select" id="select" name="select">
                  <option value="0">Seleccione Categoría</option>
                  {
                    this.state.categories.map((cat) => this.categoriasRender(cat))
                  }
              </select>
              <input type="submit" value=">"/>
            </form>
            <form onSubmit={this.paginas} id="formPaginas">
              <input type="number" id="page" placeholder="Página" name="page"/>
              <input type="submit" value=">"/>
            </form>
          </div>
            {
                this.state.posts.map((post) => this.renderListado(post))
            }
        </div>
    )
  }
}
export default Posts;