import React, { Component } from 'react'
import CategoryService from './api/CategoryService';
import '../../Css/Admin.css';

class UpdateCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catId: this.props.match.params.catId,
            catName: ''
          
        }
        this.changeCatIdHandler = this.changeCatIdHandler.bind(this);
        this.changeCatNameHandler = this.changeCatNameHandler.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    componentDidMount(){
        CategoryService.getCategoryById(this.state.catId).then( (res) =>{
            let category = res.data;
            this.setState({catId: category.catId,
                catName: category.catName


              
            });
        });
    }

    updateCategory = (e) => {
        e.preventDefault();
        let category = {catId: this.state.catId, catName: this.state.catName};
        console.log('category => ' + JSON.stringify(category));
        console.log('catId => ' + JSON.stringify(this.state.catId));
        CategoryService.updateCategory(category, this.state.catId).then( res => {
            this.props.history.push('/categories');



            
        });
    }
    
    changeCatIdHandler= (event) => {
        this.setState({catId: event.target.value});
    }

    changeCatNameHandler= (event) => {
        this.setState({catName: event.target.value});
    }

  

    cancel(){
        this.props.history.push('/categories');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Categories</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Category Id: </label>
                                            <input placeholder="Category Id" name="catId" className="form-control" 
                                                value={this.state.catId} onChange={this.changeCatIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category Name: </label>
                                            <input placeholder="Category Name" name="catName" className="form-control" 
                                                value={this.state.catName} onChange={this.changeCatNameHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.updateCategory}>Save</button>
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

export default UpdateCategoryComponent
