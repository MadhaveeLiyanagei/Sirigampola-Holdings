
import React, { Component } from 'react'
import DeliveryService from '../services/DeliveryService'
import SoloAlert from 'soloalert'


 class ListDeliveryComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
                delivery: []

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


    componentDidMount(){
        DeliveryService.getDelivery().then((res)=>{
            this.setState({delivery: res.data})
        });
        
    }

    addDelivery(){
        this.props.history.push('/add-delivery');
    }

            

    render() {
        return (
            <div>
    <center>

            <h2 className = "text-center" >Delivery Management</h2>
    </center>
            <div className = "row">
                <button className="button" onClick={this.addDelivery}>Add Delivery</button>

                
                
                <table className = "table table-striped table-bordered">

                    <thead>
                        <tr>
                                <th style={{width: "5%"}}>Order Id</th> 
                                <th style={{width: "10%"}}>Order Name</th>
                                <th style={{width: "15%"}}>Address</th>
                                <th style={{width: "10%"}}>Phone Number</th>
                                <th style={{width: "10%"}}>Search</th>
                                <th style={{width: "20%"}}>delete update</th>
                                <th style={{width: "15%"}}>Report</th>
                                <th style={{width: "15%"}}>Done</th>
                              

                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.delivery.map(
                               delivery =>
                               <tr key = {delivery.id}>
                                    <td>{ delivery.id}</td>
                                    <td >{ delivery.order_name}</td> 
                                    <td>{ delivery.order_address}</td>
                                    <td>{ delivery.order_phone_number}</td>
                                    <tb> <button onClick={ () => this.editDelivery(delivery.id)} className="button-search">Search </button></tb>
                                    <td>
                                    <button onClick={ () => this.editDelivery(delivery.id)} className="button-up">Update </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDelivery(delivery.id)} className="button-dele">Delete </button>   
                                    </td>
                                    <tb>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewDelivery(delivery.id)} className="button-view">Report </button>
                                    </tb>  
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
