import React, { Component } from 'react'
import ProductService from './api/ProductService';


class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(menuId){
        ProductService.deleteProduct(menuId).then( res => {
            this.setState({products: this.state.products.filter(product => product.menuId !== menuId)});
        });
    }
    viewCategory(menuId){
        this.props.history.push(`/view-product/${menuId}`);
    }
    editProduct(menuId){
        this.props.history.push(`/add-product/${menuId}`);
    }

    componentDidMount(){
        ProductService.getProduct().then((res) => {
            this.setState({ products: res.data});
        });
    }

    addProduct(){
        this.props.history.push('/add-product/Menu_Id');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Product List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Product Id</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                  
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody align="right">
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr>
                                            <td> {product.menuId}</td>
                                        <td> { product.menuName} </td>   
                                        <td> { product.price} </td>  
                                             <td>
                                                 <button onClick={ () => this.editProduct(product.menuId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "2x"}} onClick={ () => this.deleteProduct(product.menuId)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListProductComponent;
