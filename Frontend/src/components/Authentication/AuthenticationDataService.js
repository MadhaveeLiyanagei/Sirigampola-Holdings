import axios from 'axios'



class AthenticationDataService{



    getUser(userId){

        return axios.get(`http://localhost:8070/api/v1/login/${userId}`);

    }



}



export default new AthenticationDataService();