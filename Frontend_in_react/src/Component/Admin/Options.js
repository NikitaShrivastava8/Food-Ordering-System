import React from 'react'
import {ListGroup}  from 'reactstrap';
import { Link } from 'react-router-dom';

const Options = () => {
  return (
    <div>
      <ListGroup>
  <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Home</Link>
  <Link  className="list-group-item list-group-item-action" tag="a" to="/categories" action>Add Category</Link>
  <Link  className="list-group-item list-group-item-action" tag="a" to="/products" action>Add Product</Link>
  <Link  className="list-group-item list-group-item-action" tag="a" to="/users" action>View Users</Link>
  
  
</ListGroup>
    </div>
  )
}

export default Options
