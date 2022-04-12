import axios from 'axios';

const CATEGORY_API_BASE_URL = "http://localhost:8080/category";

class CategoryService {

    getCategory(){
        return axios.get(CATEGORY_API_BASE_URL + '/getAll');
    }

    createCategory(category){
        return axios.post(CATEGORY_API_BASE_URL + '/add', category);
    }

    getCategoryById(catId){
        return axios.get(CATEGORY_API_BASE_URL + '/get/' + catId);
    }

    updateCategory(catId,category){
        return axios.put(CATEGORY_API_BASE_URL + '/update/' + catId, category);
    }

    deleteCategory(catId){
        return axios.delete(CATEGORY_API_BASE_URL + '/delete/' + catId);
    }
}

export default new CategoryService()