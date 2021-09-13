
import React, { Component } from 'react'
import CourierService from '../services/CourierService';


 class ListCourierComponent extends Component {
                constructor(props){
                    super(props)

                    this.state = {
                            courier: []

                    }
                this.addCourier = this.addCourier.bind(this);
                this.editCourier = this.editCourier.bind(this);
                this.deleteCourier = this.deleteCourier.bind(this);
               
                    
                }

                deleteCourier(id){
                    CourierService.deleteCourier(id).then( res => {
                        this.setState({courier: this.state.courier.filter(courier => courier.id !== id)}

                    
                        );
                    
                    });
                }
                
                
                viewCourier(id){
                    this.props.history.push(`/view-courier/${id}`);
                }
                    
                editCourier(id){
                    this.props.history.push(`/update-courier/${id}`);

                }

            
                componentDidMount(){
                    CourierService.getCourier().then((res)=>{
                        this.setState({courier: res.data})
                    });
                    
                }

                addCourier(){
                    this.props.history.push('/add-courier');
                }

    render() {
        return (
            <div>
    <center>

            <h2 className = "text-center" >Courier Services</h2>
    </center>
            <div className = "row">
                <button className="button" onClick={this.addCourier}> Add Courier service</button>

                
                
                <table className = "table table-striped table-bordered">

                    <thead>
                        <tr>
                                <th >Courier Id</th> 
                                <th>Courier Name</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                                <th> Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.courier.map(
                               courier =>
                               <tr key = {courier.id}>
                                    <td>{courier.id}</td>
                                    <td >{courier.name}</td> 
                                    <td>{courier.address}</td>
                                    <td>{courier.phone_number}</td>
                                    <td>{courier.email}</td>
                                    <td>
                                                 <button onClick={ () => this.editCourier(courier.id)} className="button-up">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCourier(courier.id)} className="button-dele">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCourier(courier.id)} className="button-view">View </button>
                                             </td>
                
                               </tr> 
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
  
  
  
        }
    
}

 
export default ListCourierComponent
