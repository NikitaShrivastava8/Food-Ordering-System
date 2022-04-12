import React from 'react'
import { NavLink } from 'react-router-dom';
import RestaurantIcon from '@material-ui/icons/Restaurant';

//import Logo from '../assets/Resto-logos_transparent.png'
import '../Css/List.css';



const List=()=> {
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
            <nav>
                <div className="list">
                 <NavLink exact to="/" className="listItem" activeClassName="activeItem"> <b>Home</b></NavLink>
                 <NavLink to="/features" className="listItem" activeClassName="activeItem"><b>Features</b></NavLink>
                 <NavLink to="/menu" className="listItem" activeClassName="activeItem"><b>Menu</b></NavLink>
                 <NavLink to="/offers" className="listItem" activeClassName="activeItem"><b>Offers</b></NavLink>
                 <NavLink to="/contact" className="listItem" activeClassName="activeItem"><b>Contact</b></NavLink>
                </div>
            </nav>
          <div className="icons">
        
          <NavLink exact to="/login" className="icon" activeClassName="activeItem"><b>Log in</b></NavLink>
          <NavLink exact to="/register" className="icon" activeClassName="activeItem"><b>Sign up</b></NavLink>
          
        
        </div>
        
        

    </div>
</header>
   </>
  )
}

export default List
