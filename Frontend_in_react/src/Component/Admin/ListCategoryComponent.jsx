import React, { Component } from 'react'
import CategoryService from './api/CategoryService';


class ListCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                categories: []
        }
        this.addCategory = this.addCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    deleteCategory(catId){
        CategoryService.deleteCategory(catId).then( res => {
            this.setState({categories: this.state.categories.filter(category => category.catId !== catId)});
        });
    }
    viewCategory(catId){
        this.props.history.push(`/view-category/${catId}`);
    }
    editCategory(catId){
        this.props.history.push(`/add-category/${catId}`);
    }

    componentDidMount(){
        CategoryService.getCategory().then((res) => {
            this.setState({ categories: res.data});
        });
    }

    addCategory(){
        this.props.history.push('/add-category/Category_Id');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Category List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCategory}> Add Category</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Category Id</th>
                                    <th>Category Name</th>
                                  
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody align="right">
                                {
                                    this.state.categories.map(
                                        category => 
                                        <tr>
                                            <td> {category.catId}</td>
                                        <td> { category.catName} </td>   
                                             <td>
                                                 <button onClick={ () => this.editCategory(category.catId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "2x"}} onClick={ () => this.deleteCategory(category.catId)} className="btn btn-danger">Delete </button>
                                                 
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

export default ListCategoryComponent;
