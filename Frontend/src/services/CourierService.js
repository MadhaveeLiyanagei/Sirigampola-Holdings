import axios from 'axios';

const COURIER_API_BASE_URL ="http://localhost:8080/api/v1/courier";

class CourierService{



    getCourier(){
        return axios.get(COURIER_API_BASE_URL);
    }

    createCourier(courier){
        return axios.post(COURIER_API_BASE_URL, courier);
    }

    getCourierById(courierId){
        return axios.get(COURIER_API_BASE_URL  + '/' + courierId);
    }


    updateCourier(courier, courierId){
        return axios.put(COURIER_API_BASE_URL  + '/' + courierId, courier);
    }


    deleteCourier(courierId){
        return axios.delete(COURIER_API_BASE_URL  + '/' + courierId);
    }



}

export default new CourierService()