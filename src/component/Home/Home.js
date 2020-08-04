import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './Home.scss';

const loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

// Containers
const Header = React.lazy(() => import('../Header/Header'));
const Posts = React.lazy(() => import('../../Posts/Posts'));

class Home extends React.Component{
  render(){
    return(
      <dev>
        <div className="app-header">
            <Suspense fallback={loading()}>
                <Header/>
            </Suspense>
        </div>

        <div className="app-body">
            <Suspense fallback={loading()}>
                <Posts/>
            </Suspense>
        </div> 

      </dev>
    )
  }
}
export default Home;
