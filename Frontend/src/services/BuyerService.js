import axios from 'axios';


const BUYER_API_BASE_URL = "http://localhost:8070/api/v1/buyer";

class BuyerService{

    getBuyer(){
    return axios.get(BUYER_API_BASE_URL);
    }
    
    createBuyer(buyer){
        return axios.post(BUYER_API_BASE_URL, buyer);
    }

    getBuyerId(buyerId){
        return axios.get(BUYER_API_BASE_URL + '/'+ buyerId);
    }

    updateBuyer(buyer, buyerId){
        return axios.put(BUYER_API_BASE_URL + '/' +  buyerId, buyer);
    }

    deleteBuyer(buyerId){

        return axios.delete(BUYER_API_BASE_URL + '/' + buyerId);
    }
}

export default new BuyerService()