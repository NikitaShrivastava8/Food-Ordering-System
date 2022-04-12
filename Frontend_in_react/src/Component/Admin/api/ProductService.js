import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/product";

class ProductService {

    getProduct(){
        return axios.get(PRODUCT_API_BASE_URL + '/getAll');
    }

    createProduct(product){
        return axios.post(PRODUCT_API_BASE_URL + '/add', product);
    }

    getProductById(menuId){
        return axios.get(PRODUCT_API_BASE_URL + '/get/' + menuId);
    }

    updateProduct(menuId,product){
        return axios.put(PRODUCT_API_BASE_URL + '/update/' + menuId, product);
    }

    deleteProduct(menuId){
        return axios.delete(PRODUCT_API_BASE_URL + '/delete/' + menuId);
    }
}

export default new ProductService()