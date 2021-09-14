import axios from "axios";
//import { Default } from "react-toastify/dist/utils";

const NOTICES_API_BASE_URL="http://localhost:8080/api/v1/adNotices";

class NoticesService{

    getNotices(){
        return axios.get(NOTICES_API_BASE_URL);
    }

    createNotice(notice){
        return axios.post(NOTICES_API_BASE_URL,notice);
    }

    getNoticesById(id){
        return axios.get(NOTICES_API_BASE_URL + '/'+ id);

    }

    updateNotice(notice, id){
        return axios.put(NOTICES_API_BASE_URL + '/'+ id, notice);
 
     }

    deleteNotice(id){
        return axios.put(NOTICES_API_BASE_URL + '/'+ id);
    }
} 

export default new NoticesService()