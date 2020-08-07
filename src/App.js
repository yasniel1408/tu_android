import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Cargando...</div>;

// Pages
const Home = React.lazy(() => import('./component/Home/Home'));
const DetallePost = React.lazy(() => import('./component/DetallePost/DetallePost'));


class App extends React.Component{
  render(){
    return(
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
              <Route path="/detallepost/:post" name="Detalle Post" render={props => <DetallePost {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    )
  }
}
export default App;



















