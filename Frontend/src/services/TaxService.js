import axios from 'axios';

 const TAX_API_BASE_URL = "http://localhost:8080/api/v1/taxes";

class TaxService {

    getTaxes(){
        return axios.get(TAX_API_BASE_URL);
    }

    createTax(tax){
       return axios.post(TAX_API_BASE_URL, tax);
    }

    getTaxById(taxId){
        return axios.get(TAX_API_BASE_URL + '/' + taxId);
    }

    updateTax(tax, taxId){
        return axios.put(TAX_API_BASE_URL + '/' + taxId, tax);
    }

    deleteIncome(taxId){
        return axios.delete(TAX_API_BASE_URL + '/' + taxId);
    }
}

export default new TaxService()