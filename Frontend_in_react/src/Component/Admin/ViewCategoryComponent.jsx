import React, { Component } from 'react'
import CategoryService from './api/CategoryService';
import '../../Css/Admin.css';


class ViewCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catId: this.props.match.params.catId,
            category: {}
        }
    }

    componentDidMount(){
        CategoryService.getCategoryById(this.state.catId).then( res => {
            this.setState({category: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Category Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Category Id: </label>
                            <div> { this.state.category.catId }</div>
                        </div>
                        <div className = "row">
                            <label> Category Name: </label>
                            <div> { this.state.category.catName }</div>
                        </div>
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCategoryComponent
