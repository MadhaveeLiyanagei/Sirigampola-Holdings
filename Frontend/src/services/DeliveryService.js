import axios from 'axios';

const DELIVERY_API_BASE_URL ="http://localhost:8080/api/v1/delivery";

class DeliveryService{



    getDelivery(){
        return axios.get(DELIVERY_API_BASE_URL);
    }

    createDelivery(delivery){
        return axios.post(DELIVERY_API_BASE_URL, delivery);
    }

    getDeliveryById(deliveryId){
        return axios.get(DELIVERY_API_BASE_URL  + '/' + deliveryId);
    }


    updateDelivery(delivery, deliveryId){
        return axios.put(DELIVERY_API_BASE_URL  + '/' + deliveryId, delivery);
    }


    deleteDelivery(deliveryId){
        return axios.delete(DELIVERY_API_BASE_URL  + '/' + deliveryId);
    }

    updateCourierDelivery(delivery, deliveryId){
        return axios.put(DELIVERY_API_BASE_URL  + '/' + deliveryId, delivery);
    }



}

export default new DeliveryService()