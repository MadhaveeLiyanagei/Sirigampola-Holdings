import axios from 'axios'



class AuthenticationDataService{



    getSupplier(supplierid){

        return axios.get(`http://localhost:8070/api/v1/supplier/${supplierid}`);

    }



}



export default new AuthenticationDataService();