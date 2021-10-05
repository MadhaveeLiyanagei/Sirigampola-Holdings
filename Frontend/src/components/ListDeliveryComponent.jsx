
import React, { Component } from 'react'
import DeliveryService from '../services/DeliveryService'
import SoloAlert from 'soloalert'
import CourierDeliveryNavbar from './CourierDeliveryNavbar';


 class ListDeliveryComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                delivery: [],
                searchId : ''

        }
    this.addDelivery = this.addDelivery.bind(this);
    this.editDelivery = this.editDelivery.bind(this);
    this.deleteDelivery = this.deleteDelivery.bind(this);
   
        
    }
  

    deleteDelivery(id){

        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    DeliveryService.deleteDelivery(id)
                   await this.setState({
                        delivery: this.state.delivery.filter(delivery => delivery.id !== id)
                    });


                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/delivery"
                        },

                    });

                } catch (err) {
                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/delivery"
                        },

                    });
                }
            },
            onCancel: function () {
                SoloAlert.alert({
                    title: "Oops!",
                    body: "You canceled delete request",
                    icon: "warning",
                    theme: "dark",
                    useTransparency: true,
                    onOk: function () {

                    },

                });
            },

        })

        

}
    
    
    viewDelivery(id){
        this.props.history.push(`/view-delivery/${id}`);
    }
        
    editDelivery(id){
        this.props.history.push(`/update-delivery/${id}`);

    }
    courierDelivery(id){
        this.props.history.push(`/courier-delivery/${id}`);

    }

    componentDidMount(){
        DeliveryService.getDelivery().then((res)=>{
            this.setState({delivery: res.data})
        });
        
    }

    addDelivery(){
        this.props.history.push('/add-delivery');
    }



    
    searchDeliveryByName(event){

        this.setState({ searchId: event.target.value.substr(0,20)});
      }


    render() {

        let filterDeliveryName = this.state.delivery.filter((

            delivery)=>{

                return  delivery.order_name.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

            }
        );
        



       

        return (

            


            <div>
                 <><CourierDeliveryNavbar/></>
                 <br></br>
                 <div className="row">
    <table>
        <tbody>
            <th className="tblclm">Search : </th>
        <th>
        <div className = "form-group col-md-4">
                      <input type="text" 
                      class="form-control"
                       style={{marginLeft:0}} 
                      placeholder="Enter Delivery Name"
                       value={this.state.searchId}
                        onChange={this.searchDeliveryByName.bind(this)}/>
            </div>

        </th>
            </tbody>
       </table>
       </div>
    <center>

            <h2 className = "text-center" >Delivery Management</h2>
    </center>
            <div className = "row">
                <button className="button" onClick={this.addDelivery}>Add Delivery</button>

               
                
                <table className = "table table-striped table-bordered">

                    <thead>
                        <tr>
                                <th style={{width: "5%"}}>Order Id</th> 
                                <th style={{width: "20%"}}>Customer Name</th>
                                <th style={{width: "20%"}}>Address</th>
                                <th style={{width: "10%"}}>Phone Number</th>
                                <th style={{width: "10%"}}>courier </th>
                                <th style={{width: "10%"}}>Search</th>
                                <th style={{width: "10%"}}>Update</th>
                                <th style={{width: "10%"}}>Report</th>
                                <th style={{width: "15%"}}>Done</th>
                              

                        </tr>
                    </thead>

                    <tbody>
                        {


                        filterDeliveryName.map(
                         delivery=>
                           
                          //this.state.delivery.map(
                           // delivery =>
                               <tr key = {delivery.id}>
                                    <td>{ delivery.id}</td>
                                    <td >{ delivery.order_name}</td> 
                                    <td>{ delivery.order_address}</td>
                                    <td>{ delivery.order_phone_number}</td>
                                    <td>{ delivery.order_courier_name}</td>
                                    <td> <button onClick={ () => this.courierDelivery(delivery.id)} className="button-search">Courier </button></td>
                                    <td>
                                    <button onClick={ () => this.editDelivery(delivery.id)} className="button-up">Update </button>
                                       
                                    </td>
                                    <td>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewDelivery(delivery.id)} className="button-view">Report </button>
                                    </td>  
                                    <td>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDelivery(delivery.id)} className="button-dele">Delete </button>
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


 
export default ListDeliveryComponent





