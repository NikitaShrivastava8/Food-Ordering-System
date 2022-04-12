import React from 'react'
import homeImg from '../assets/bg.jpeg';
import '../Css/Home.css';
import HomeList from './HomeList';
import Footer from './Footer';

const Home=()=> {
  return (
   <>
     <HomeList/>
   <div className="mainSection">
     <div className="contentBox" 
     style={{backgroundImage:`url(${homeImg})`}}>
        <h1><b>Welcome to Resto!</b></h1>
     </div>
</div>
   <Footer/>
   </>
  )
}

export default Home
