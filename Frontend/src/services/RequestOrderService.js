import axios from 'axios';


/*Request order service*/
const REQUESTORDER_API_BASE_URL = "http://localhost:8080/api/v1/requestOrder";

class RequestService{

    getRequestOrder(){
        return axios.get(REQUESTORDER_API_BASE_URL);
    }

    createRequestOrder(requestOrder){
        return axios.post(REQUESTORDER_API_BASE_URL, requestOrder);
    }
}

export default new RequestService()