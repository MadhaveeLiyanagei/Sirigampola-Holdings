import axios from "axios";

const SUPPLIER_ORDER_API_BASE_URL = "http://localhost:8080/api/v1/SupplierOrder"

class SupplierOrderService {

    getSupplierOrder(){
        return axios.get(SUPPLIER_ORDER_API_BASE_URL);
    }

    addSupplierOrder(order){
        return axios.post(SUPPLIER_ORDER_API_BASE_URL, order);
    }

    getSupplierOrderById(orderID)
    {
        return axios.get(SUPPLIER_ORDER_API_BASE_URL + '/' + orderID);
    }

    deleteSupplierOrder(orderID){
        return axios.delete(SUPPLIER_ORDER_API_BASE_URL + '/' + orderID);
    }

}

export default new SupplierOrderService()