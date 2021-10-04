import axios from "axios";

const CREATE_ORDER_API_BASE_URL = "http://localhost:8080/api/v1/CreateOrder";

class CreateOrderService {

    getOrders()
    {
        return axios.get(CREATE_ORDER_API_BASE_URL);
    }

    addOrder(order){
        return axios.post(CREATE_ORDER_API_BASE_URL, order);
    }

    getOrderById(orderID)
    {
        return axios.get(CREATE_ORDER_API_BASE_URL + '/' + orderID);
    }

    updateOrder(order, orderID){
        return axios.put(CREATE_ORDER_API_BASE_URL + '/' + orderID, order);
    }

    deleteOrder(orderID){
        return axios.delete(CREATE_ORDER_API_BASE_URL + '/' + orderID);
    }

}

export default new CreateOrderService()