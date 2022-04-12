import React from 'react'
import { NavLink} from 'react-router-dom';
import RestaurantIcon from '@material-ui/icons/Restaurant';


// import { Button } from 'reactstrap'
//import Logo from '../assets/Resto-logos_transparent.png'
import '../Css/List.css';
import '../Css/nav-bar.css';







const UserViewList=() => {


  
 

 
  
    

 


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
                 
                 <NavLink to="/features" className="listItem" activeClassName="activeItem"><b>Features</b></NavLink>
                 <NavLink to="/menu" className="listItem" activeClassName="activeItem"><b>Menu</b></NavLink>
              
                 
                </div>
            </nav>
         
         
         
          <div className="icons">
       
          
          {/* {/* <IconButton color="dark" aria-label="add to shopping cart">
  <AddShoppingCartIcon

          onClick={() => <Cart/>}
  
  /> */}
           {/* </IconButton> */} 

           {/* <NavLink exact to="/cart" className="icon" activeClassName="activeItem"><b>Cart</b></NavLink> */}

           {/* <Button color="dark" size="sm" 
               onClick={handleClick}
             
             >Cart  </Button> */}
            
          <NavLink exact to="/" className="icon" activeClassName="activeItem"><b>Log out</b></NavLink>
         
       
        
        </div>
        
        

    </div>
</header>

   </>
  )
}

export default UserViewList
