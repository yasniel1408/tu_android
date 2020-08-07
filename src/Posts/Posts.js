import React, { Suspense } from 'react';
import './Posts.scss';
import axios from 'axios'


const loading = () => <div className="">Cargando...</div>

const Card = React.lazy(() => import('../component/Card/Card'));

class Posts extends React.Component{
  constructor() {
    super();
    this.state = { 
        posts:[]
     };
  }

  async componentDidMount(){
    await axios.get('https://jorgen.cubava.cu/wp-json/wp/v2/posts?per_page=20')
        .then(response=> this.setState({posts: response.data}))
        .catch(err=>console.error(err))
  }

  renderListado = (post) => 
  <Suspense key={post.id} fallback={loading()}>
    <Card 
      post={post} 
    />
  </Suspense>
  
  render(){
    const postsList = this.state.posts
    return(
        <div className="cardPost">
            {postsList.map((post) => this.renderListado(post)
            )}
        </div>
    )
  }
}
export default Posts;