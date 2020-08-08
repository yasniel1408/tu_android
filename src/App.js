import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
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
      <div>
        <div className="app-header">
              <Suspense fallback={loading()}>
                  <Header/>
              </Suspense>
          </div>
          <div className="app-body">
              <BrowserRouter>
                <Suspense fallback={loading()}>
                  <Switch>
                    <Route exact path="/" name="Posts" render={props => <Posts {...props}/>} />
                    <Route path="/detallepost" name="Detalle Post" render={props => <DetallePost {...props}/>} />
                  </Switch>
                </Suspense>
            </BrowserRouter>
          </div>
        </div> 
    )
  }
}
export default App;



















