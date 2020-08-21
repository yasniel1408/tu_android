import React, { Suspense } from 'react';
import {Route, Switch, HashRouter } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="">Cargando...</div>;

// Pages
const DetallePost = React.lazy(() => import('./DetallePost/DetallePost'));
const Posts = React.lazy(() => import('./Posts/Posts'));

// Containers
const Header = React.lazy(() => import('./component/Header/Header'));


class App extends React.Component{

  render(){
    return(
      <div className="app-body">
          <HashRouter>
            <Suspense fallback={loading()}>
              <Header/>
              <Switch>
                <Route exact path="/" name="Posts" render={props => <Posts {...props}/>} />
                <Route path="/detallepost" name="Detalle Post" render={props => <DetallePost {...props}/>} />
              </Switch>
            </Suspense>
          </HashRouter>
      </div>
    )
  }
}
export default App;

//https://jorgen.cubava.cu/wp-json/wp/v2/categories
//https://jorgen.cubava.cu/wp-json/wp/v2/posts?categories=88


















