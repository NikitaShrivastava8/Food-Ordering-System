import React from 'react'
import { NavLink } from 'react-router-dom';
import RestaurantIcon from '@material-ui/icons/Restaurant';

//import Logo from '../assets/Resto-logos_transparent.png'
import '../Css/List.css';



const HomeList=()=> {
  return (
   <>
<header>


<div className="container container-flex">
        <div className="logo">
        <RestaurantIcon className="restologo" />
          <span className="text">
              <b>Resto</b>
            </span>

            </div>
           
          <div className="icons">
        
          <NavLink exact to="/login" className="icon" activeClassName="activeItem"><b>Log in</b></NavLink>
          <NavLink exact to="/register" className="icon" activeClassName="activeItem"><b>Sign up</b></NavLink>
          
        
        </div>
        
        

    </div>
</header>
   </>
  )
}

export default HomeList
