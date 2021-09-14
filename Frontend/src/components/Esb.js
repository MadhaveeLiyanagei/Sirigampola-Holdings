import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import AdminEmployeeSideBar from './AdminEmployeeSideBar';

function Esb() {
    return (
  
      <div>
       
          <Router>
            <AdminEmployeeSideBar/>
          </Router>
        
      </div>
      
    );
  }
  
  export default Esb;