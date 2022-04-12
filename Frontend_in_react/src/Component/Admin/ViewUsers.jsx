import React, { Component } from 'react'
import UserService from './api/UserService';
import '../../Css/Admin.css';


class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            user: {},
            users: []
        }
    }

    componentDidMount(){
        UserService.getUser().then( res => {
            this.setState({users : res.data});
        })
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">User List</h2>
                 <div className = "row">
                   
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>User Id</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                  
                                   
                                </tr>
                            </thead>
                            <tbody align="right">
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr>
                                            <td> {user.userId}</td>
                                        <td> { user.fullName} </td>   
                                        <td> { user.email} </td>   
                                        <td> { user.address} </td>   
                                            
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

export default ViewUserComponent
