import axios from 'axios';
import CreateBuyerOrdersComponent from '../components/CreateBuyerOrdersComponent';
const BuyerOrders_API_BASE_URL ="http://localhost:8080/api/v1/BuyerOrders";
class BuyerOrdersService{

    getBuyerOrders(){
        return axios.get(BuyerOrders_API_BASE_URL);
    }
    

    CreateBuyerOrders(BuyerOrders){
        return axios.post(BuyerOrders_API_BASE_URL, BuyerOrders);
    }

    getBuyerOrdersById(id){
        return axios.get(BuyerOrders_API_BASE_URL + '/'+ id);
    }

    updateBuyerOrders(BuyerOrders, id){
        return axios.put(BuyerOrders_API_BASE_URL + '/' + id, BuyerOrders );
    }

    deleteBuyerOrders( id){
        return axios.delete(BuyerOrders_API_BASE_URL + '/' + id);
    }

}


export default new BuyerOrdersService()