import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import Options from './Options'
import {ToastContainer} from 'react-toastify';
import {BrowserRouter,Route} from 'react-router-dom'
import CreateCategoryComponent from './CreateCategoryComponent';
import ViewCategoryComponent from './ViewCategoryComponent';
import UpdateCategoryComponent from './UpdateCategoryComponent';
import ListCategoryComponent from './ListCategoryComponent';
import HeaderComponent from './HeaderComponent';
import ListProductComponent from './ListProductComponent';
import CreateProductComponent from './CreateProductComponent';
import ViewUserComponent from './ViewUsers';



function DashBoard() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      
  <Container>
  <HeaderComponent/>
      <Row>
          <Col md={4} >
          <Options/>
          </Col>
          <Col md={8}>
           
          <Route  path="/categories" component={ListCategoryComponent}/>
          <Route path = "/add-category/:id" component = {CreateCategoryComponent}></Route>
          <Route path = "/view-category/:id" component = {ViewCategoryComponent}></Route>
          {/* <Route path="/view-category" component={ViewCategoryComponent} exact/> */}
         { <Route path="/update-category/:id" component={UpdateCategoryComponent} exact/>}

         <Route  path="/products" component={ListProductComponent}/>
          <Route path = "/add-product/:id" component = {CreateProductComponent}></Route>
          {/* <Route path = "/view-product/:id" component = {ViewCategoryComponent}></Route> */}

          <Route path = "/users" component = {ViewUserComponent}></Route>
      
          </Col>
      </Row>
   
  </Container>
  
      </BrowserRouter>
    </div>
  )
}

export default DashBoard
