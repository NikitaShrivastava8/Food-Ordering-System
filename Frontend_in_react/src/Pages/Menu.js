import React, { useState } from "react";


import "../Css/styles.css"
import "../Css/box.css";

import Items from "./Items";
import Cart from "./Cart";

import DisplayMenu from "./DisplayMenu";

import { NavLink} from 'react-router-dom';
import RestaurantIcon from '@material-ui/icons/Restaurant';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Button } from 'reactstrap'
//import Logo from '../assets/Resto-logos_transparent.png'
import '../Css/List.css';
import '../Css/nav-bar.css';




const Menu = () => {

   // Basket
   const [basket, setBasket] = useState([]);

   
   
   const openNav = () => {
    document.getElementById("mySidenav").style.height = "350px";
};
   
   
   // Add to basket
   const addItem = (foodItem) => {
       // Check if the item exist or not
       const exist = basket.find((item) => item.id === foodItem.id);
       if (exist) {
           setBasket(basket.map(item => item.id === foodItem.id ? {...exist, qty: exist.qty + 1} : item));
       } else {
           setBasket([...basket, {...foodItem, qty: 1}]);
       }
   };

   // Remove from basket
   const removeItem = (foodItem) => {
       // Check if the item exist or not
       const exist = basket.find((item) => item.id === foodItem.id);
       if (exist.qty === 1) {
           setBasket(basket.filter((item) => item.id !== foodItem.id));
       } else {
           setBasket(basket.map(item => item.id === foodItem.id ? {...exist, qty: exist.qty - 1} : item));
       }
   };

  
  
  
  
  
  return (
    <div className="App">
            <div>
              
            
              <div className="container container-flex">
        <div className="logo">
        <RestaurantIcon className="restologo" />
          <span className="text">
              <b>Resto</b>
            </span>

            </div>
            <nav>
                <div className="list">
                 
                 <NavLink to="/features" className="listItem" activeClassName="activeItem"><b>Features</b></NavLink>
                 <NavLink to="/menu" className="listItem" activeClassName="activeItem"><b>Menu</b></NavLink>
              
                 
                </div>
            </nav>
         
         
         
          <div className="icons">
       

 
             
             <button onClick={openNav} className="iconnew btn-outline-dark d-flex align-items-center" 
                                    type="button" ><ShoppingCartIcon/><span className="badge bg-danger">{basket.length}</span>
                            </button>


         
          <NavLink exact to="/" className="icon" activeClassName="activeItem"><b>Log out</b></NavLink>
         
       
        
        </div>
        
        

    </div>

             

                <DisplayMenu menu={Items} addItem={addItem}/>
                <Cart items={basket} removeItem={removeItem}/>
            </div>
        </div>
  
  )
};

export default Menu;






