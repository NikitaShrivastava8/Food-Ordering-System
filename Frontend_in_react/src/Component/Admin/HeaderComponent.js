import React from 'react'
import { Card,CardBody,Button } from 'reactstrap'





function HeaderComponent() {

  
  
  
  const handleClick=()=>
  {

    
    
    localStorage.clear();
  window.location.href = '/';
    
  }
    
    

  
  return (
   
       
          <div>
              
            <Card className="my-2 ml-4 bg-warning">
             
              <CardBody >
             
        <h3 className="text-center ml-2 ">Welcome to Admin Dashboard </h3>
        <div>
  <Button
    color="dark" onClick={handleClick} >
    Log Out
     </Button>
</div>
        </CardBody>
        </Card>
        </div>
       
     
      
   
  );
}

export default HeaderComponent;



