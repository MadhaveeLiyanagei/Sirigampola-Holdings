import axios from 'axios';

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/v1/inventory";

class InventoryService{

    getInventory(){
        return axios.get(INVENTORY_API_BASE_URL) 
    }

    createInventory(inventory){
        return axios.post(INVENTORY_API_BASE_URL, inventory);
    }

    getInventoryByID(inventoryID){
        return axios.get(INVENTORY_API_BASE_URL + '/' + inventoryID);
    }

    updateInventory(inventory, inventoryID){
       return axios.put(INVENTORY_API_BASE_URL + '/'+ inventoryID, inventory);

    }

    deleteInventory(inventoryID){
        return axios.delete(INVENTORY_API_BASE_URL + '/' + inventoryID);
    }
}

export default new InventoryService()