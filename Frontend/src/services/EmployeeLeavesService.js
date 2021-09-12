import axios from "axios";

const EMPLOYEE_LEAVES_API_BASE_URL = "http://localhost:8080/api/v1/employeeLeaves";

class EmployeeLeavesService{

    getEmployeeLeaves(){
        return axios.get(EMPLOYEE_LEAVES_API_BASE_URL);
    }

    createEmployeeLeaves(employeeLeaves){
        return axios.post(EMPLOYEE_LEAVES_API_BASE_URL, employeeLeaves);
    }

    getEmployeeLeavesByLeaveNumber(leaveNumber){
        return axios.get(EMPLOYEE_LEAVES_API_BASE_URL + '/' + leaveNumber);
    }

    updateEmployeeLeaves(employeeLeaves, leaveNumber){
       return axios.put(EMPLOYEE_LEAVES_API_BASE_URL + '/'+ leaveNumber, employeeLeaves);
    }

    deleteEmployeeLeaves(leaveNumber){
        return axios.delete(EMPLOYEE_LEAVES_API_BASE_URL + '/' + leaveNumber);
    }

}

export default new EmployeeLeavesService()