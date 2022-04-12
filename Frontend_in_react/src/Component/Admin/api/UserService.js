import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/user";

class UserService {

    getUser(){
        return axios.get(USER_API_BASE_URL + '/getAll');
    }

   


}

export default new UserService()