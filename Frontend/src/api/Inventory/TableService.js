import axios from "axios"

class TableService{
    
    getAllProducts(){
        return axios.get("http://localhost:8080/products")
    }
    addNewProduct(product){
        return axios.post("http://localhost:8080/products",product)
    }  
    deleteProduct(id){
        return axios.delete(`http://localhost:8080/products/${id}`)
    } 
}

export default new TableService()