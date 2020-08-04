import React, { Suspense } from 'react';
import './Posts.scss';


const loading = () => <div className="animated fadeIn pt-1 text-center">Cargando...</div>

const Card = React.lazy(() => import('../component/Card/Card'));

class Posts extends React.Component{
  render(){
    return(
        <div className="cardPost">
            <Suspense fallback={loading()}>

                <Card/>
                <Card/>
                <Card/>

                <Card/>
                <Card/>
                <Card/>

                <Card/>
                <Card/>
                <Card/>

                <Card/>
                <Card/>
                <Card/>
                
            </Suspense>
        </div>
    )
  }
}
export default Posts;