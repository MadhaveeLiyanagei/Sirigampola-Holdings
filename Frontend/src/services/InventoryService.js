import axios from 'axios';

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/v1/inventory";

class InventoryService{

    getInventory(){
        return axios.get(INVENTORY_API_BASE_URL)
    }
}

export default new InventoryService()