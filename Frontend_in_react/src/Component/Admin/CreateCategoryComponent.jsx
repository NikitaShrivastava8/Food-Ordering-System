import React, { Component } from 'react'
import CategoryService from './api/CategoryService';
import '../../Css/Admin.css';
class CreateCategoryComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            catId: this.props.match.params.id,
            catName: ''
           
        }
        this.changeCatIdHandler = this.changeCatIdHandler.bind(this);
        this.changeCatNameHandler = this.changeCatNameHandler.bind(this);
        this.saveOrUpdateCategory = this.saveOrUpdateCategory.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.catId === '_add'){
            return
        }else{
            CategoryService.getCategoryById(this.state.catId).then( (res) =>{
                let category = res.data;
                this.setState({catId: category.catId,
                    catName: category.catName
                 
                });
            });
        }        
    }
    saveOrUpdateCategory = (e) => {
        e.preventDefault();
        let category = {catId: this.state.catId, catName: this.state.catName};
        console.log('category => ' + JSON.stringify(category));

        // step 5
        // if(this.state.catId === '_add'){
        //     CategoryService.createCategory(category).then(res =>{
        //         this.props.history.push('/categories');
        //     });
        // }else{
        //     CategoryService.updateCategory(category, this.state.catId).then( res => {
        //         this.props.history.push('/categories');
        //     });
        // }
        CategoryService.createCategory(category).then(res =>{
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
                                {
                                    
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Category Id: </label>
                                            <input placeholder="Category Id" name="catId" className="form-control" 
                                                value={this.state.catId === 'Category_Id'? '':this.state.catId} onChange={this.changeCatIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Category Name: </label>
                                            <input placeholder="Category Name" name="catName" className="form-control" 
                                                value={this.state.catName} onChange={this.changeCatNameHandler}/>
                                        </div>
                                      

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCategory}>Save</button>
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

export default CreateCategoryComponent
