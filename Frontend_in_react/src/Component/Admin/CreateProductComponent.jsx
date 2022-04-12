import React, { Component } from 'react'
import ProductService from './api/ProductService';
import '../../Css/Admin.css';
class CreateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            menuId: this.props.match.params.id,
            menuName: '',
            price: ''
           
        }
        this.changeMenuIdHandler = this.changeMenuIdHandler.bind(this);
        this.changeMenuNameHandler = this.changeMenuNameHandler.bind(this);
        this.changeMenuPriceHandler = this.changeMenuPriceHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.menuId === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.menuId).then( (res) =>{
                let product = res.data;
                this.setState({menuId: product.menuId,
                    menuName: product.menuName,
                    price: product.price
                 
                });
            });
        }        
    }
    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {menuId: this.state.menuId, menuName: this.state.menuName, price: this.state.price};
        console.log('product => ' + JSON.stringify(product));

        // step 5
        // if(this.state.menuId === '_add'){
        //     ProductSProduct(product).then(res =>{
        //         this.props.history.push('/categories');
        //     });
        // }else{
        //     ProductService.updateCategory(product, this.state.menuId).then( res => {
        //         this.props.history.push('/categories');
        //     });
        // }
        ProductService.createProduct(product).then(res =>{
            this.props.history.push('/products');
        });
    }
    
    changeMenuIdHandler= (event) => {
        this.setState({menuId: event.target.value});
    }

    changeMenuNameHandler= (event) => {
        this.setState({menuName: event.target.value});
    }
    
    changeMenuPriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

   

    cancel(){
        this.props.history.push('/products');
    }

   
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Id: </label>
                                            <input placeholder="Menu Id" name="menuId" className="form-control" 
                                                value={this.state.menuId === 'Menu_Id'? '':this.state.menuId} onChange={this.changeMenuIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="menuName" className="form-control" 
                                                value={this.state.menuName} onChange={this.changeMenuNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Price: </label>
                                            <input placeholder="Product Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changeMenuPriceHandler}/>
                                        </div>
                                      

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProductComponent
