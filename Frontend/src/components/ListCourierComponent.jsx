
import React, { Component } from 'react'
import CourierService from '../services/CourierService';
import SoloAlert from 'soloalert'
import CourierDeliveryNavbar from './CourierDeliveryNavbar';

 class ListCourierComponent extends Component {
                constructor(props){
                    super(props)

                    this.state = {
                            courier: [],
                            searchId : ''

                    }
                this.addCourier = this.addCourier.bind(this);
                this.editCourier = this.editCourier.bind(this);
                this.deleteCourier = this.deleteCourier.bind(this);
               
                    
                }
              

                deleteCourier(id){

                    SoloAlert.confirm({
            
                        title: "Confirm Delete",
                        body: "Are you sure",
                        theme: "dark",
                        useTransparency: true,
                        onOk: async function () {
            
                            try {
                                CourierService.deleteCourier(id)
                               await this.setState({
                                    courier: this.state.courier.filter(courier => courier.id !== id)
                                });
            
            
                                SoloAlert.alert({
                                    title: "Welcome!",
                                    body: "Deletion is successful",
                                    icon: "success",
                                    theme: "dark",
                                    useTransparency: true,
                                    onOk: function () {
                                        window.location = "/courier"
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
                                        window.location = "/courier"
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

                 searchCourierByName(event){

                    this.setState({ searchId: event.target.value.substr(0,20)});
                  }
    render() {


        let filterCourierName = this.state.courier.filter((

            courier)=>{

                return  courier.name.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

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
                                    <input type="text"  class="form-control"  style={{marginLeft:0}}  placeholder="Enter Courier Name" value={this.state.searchId} onChange={this.searchCourierByName.bind(this)}/>
                            </div>

                    </th>
    </tbody>
</table>
</div>
               <center>

            <h2 className = "text-center" >Courier Services</h2>
            </center>
           
            <div className = "row">
                <button className="button" onClick={this.addCourier}> Add Courier service</button>

                
                
                <table className = "table table-striped table-bordered">

                    <thead>
                        <tr>
                                <th style={{width: "5%"}}><center>Courier Id</center></th> 
                                <th style={{width: "10%"}}><center>Courier Name</center></th>
                                <th style={{width: "25%"}}><center>Address</center></th>
                                <th style={{width: "10%"}}><center>Phone Number</center></th>
                                <th style={{width: "20%"}}><center>Email Address</center></th>
                                <th style={{width: "30%"}}><center> Actions</center></th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                             filterCourierName.map(
                                courier=>
                            //this.state.courier.map(
                               //courier =>
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




