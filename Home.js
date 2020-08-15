import React from 'react'
import './Home.css';
import pic from './template.png';
import logo from './gllogo.png';
import quote from './quotes.png';

function Home() {
    return (
        
        <div className="pic__div">
            <div className="top__name">
              <img className="home__logo" src={logo} alt="" />
              <p className="home__text">Grown Lush</p>
              <p className="home__text2">(The Bridge)</p>
              <img className="home__quote" src={quote} alt="" />
           </div>
           <img className="template__pic" src={pic} alt="" />
           
        </div>
    )
}

export default Home
