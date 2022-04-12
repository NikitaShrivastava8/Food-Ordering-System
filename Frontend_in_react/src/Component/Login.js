import React, { useState } from 'react'
import {TextField, Button, Divider,Container,Grid } from '@material-ui/core';
import {Link,useHistory} from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';

 
export default function Login()
{
 
  const[email,SetEmail]=useState('')
  const[password,SetPassword]=useState('')
  let history=useHistory();

 
  const handleClick=(e)=>
  {

    
    
    e.preventDefault();
    const user={email,password}
    if(email==="admin@gmail.com" && password==="admin")
    {
      e.preventDefault();
      history.push('/admin')
    }
    else{
    console.log(user)
    e.preventDefault();
    history.push('/userview')
    fetch("http://localhost:8080/user/login",{
      method:"GET",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

    }).then(()=>{
      console.log("User LoggedIn")
    })
  }
  }
  
    return (
      <div>
        <Container maxWidth="md">
     <div className="app">
       <div className="icon">
         <div className="icon_class"></div>
         <Grid container direction={"column"} spacing={2} alignItems="center">
         <PersonIcon fontSize="large"/>
         </Grid>
       
       <Grid container direction={"column"} spacing={2} alignItems="center">
       <Grid item>
         <div className="text">Sign in</div>
           
         </Grid>
       </Grid>
       
       </div>
    
       <div className="row m-2">
       <Grid container direction={"column"} spacing={2}>
       <Grid item>
  
       <TextField  id="email"  className="p-2" type="text" variant="outlined" label="Enter email" fullWidth
          value={email}
          onChange={(e)=>SetEmail(e.target.value)}
       
       
       />
       </Grid>
       
       <Grid item>
       <TextField   id="password"  className="p-2"  variant="outlined" label="Enter password" fullWidth
           value={password}
           onChange={(e)=>SetPassword(e.target.value)}
           type="password"
           autoComplete="current-password"
       
       />
       </Grid>
       </Grid>

       <Grid container direction={"column"} spacing={4} alignItems="center">
       <Grid item>
      
     
       <Button variant="contained" color="primary"  onClick={handleClick}>Log in</Button>
       </Grid>
       </Grid>
       </div>
       <Grid container direction={"column"} spacing={2} alignItems="center">
       <Divider variant="middle"/>
      
       <Link to="/register" className="text-black-50">
         <h4>Don't have an account? Sign Up</h4>
        </Link>
  </Grid>
  
     </div>
     </Container>
   
     
   </div>
    )
      }
    
  




