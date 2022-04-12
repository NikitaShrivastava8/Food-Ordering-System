import React, { useState } from 'react'
import {TextField, Button, Divider,Container,Grid } from '@material-ui/core';
import {Link,useHistory} from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';



export default function Register()
{
  const[fullName,SetFullName]=useState('')

  const[email,SetEmail]=useState('')
  const[password,SetPassword]=useState('')
  const[address,SetAddress]=useState('')
  let history=useHistory();

  const handleClick=(e)=>
  {
    e.preventDefault();
    const user={fullName,address,email,password}
    console.log(user)
    history.push('/login')
    fetch("http://localhost:8080/user/register",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)

    }).then(()=>{
      console.log("New User Registered")
    })
  }
 return (
    <div>
      <Container maxWidth="md">
      <div className="app">
        <div className="icon">
          <div className="icon_class"></div>
          <Grid container direction={"column"} spacing={2} alignItems="center">
          <PersonAddIcon fontSize="large"/>
          </Grid>
          <Grid container direction={"column"} spacing={2} alignItems="center">
        <Grid item>
          <div className="text">Sign up</div>
          </Grid>
        </Grid>
        
        </div>
        <Grid container direction={"column"} spacing={2} >
        <Grid item>
        <TextField id="fullName" className="p-2" type="text" variant="outlined" label="Enter FullName" fullWidth
              value={fullName}
              onChange={(e)=>SetFullName(e.target.value)}
        
        />
        </Grid>
        </Grid>
        <Grid container direction={"column"} spacing={2} >
        <Grid item>
        <TextField id="address" className="p-2" type="text" variant="outlined" label="Enter Address" fullWidth
              value={address}
              onChange={(e)=>SetAddress(e.target.value)}
        
        />
        </Grid>
        </Grid>
       
        
 
        <div className="row m-2">
        <Grid container direction={"column"} spacing={2}>
        <Grid item>
        <TextField id="email"  className="p-2" type="text" variant="outlined" label="Enter email" fullWidth
         value={email}
         onChange={(e)=>SetEmail(e.target.value)}
        
        />
        </Grid>
        </Grid>
        <Grid container direction={"column"} spacing={4} >
        <Grid item>
        <TextField id="password" className="p-2"  variant="outlined" label="Enter password" fullWidth
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
        
        />
        </Grid>
        </Grid>
 
        <Grid container direction={"column"} spacing={10} alignItems="center">
        <Grid item>
       
      <Button variant="contained" color="primary" onClick={handleClick}>Create Account</Button>
        </Grid>
        </Grid>
        </div>
       <Grid container direction={"column"} spacing={2} alignItems="center">
        <Divider variant="middle"/>
        <p className="text-center">
        <Link to="/login" className="text-black-50">
          <h4>Already have an Account?</h4>
        </Link>
       </p>
        </Grid>
      
      </div>
      </Container>
      </div>
     
)
}
