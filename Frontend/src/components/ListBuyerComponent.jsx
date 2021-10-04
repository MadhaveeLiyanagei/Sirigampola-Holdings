import React, { Component } from 'react';
import BuyerService from '../services/BuyerService';
import SoloAlert from 'soloalert';

import './HeaderUser.css';


class ListBuyerComponent extends Component {
         constructor (props){
             super(props)

                 this.state = {

                     buyer: [],

                     searchId:''
             }

            this.addBuyer = this.addBuyer.bind(this);
            this.editBuyer = this.editBuyer.bind(this);
            this.deleteBuyer = this.deleteBuyer.bind(this);
         }

         deleteBuyer(id){
            SoloAlert.confirm({

                title: "Confirm Delete",
                body: "Are you sure",
                theme: "dark",
                useTransparency: true,
                onOk: async function () {
    
                    try { BuyerService.deleteBuyer(id)
                        await this.setState({
                            buyer: this.State.buyer.filter(buyer => buyer.id !== id)
                        });
                   
                
                         SoloAlert.alert({
                             title: "Welcome!",
                             body: "Deletion is successful",
                             icon: "success",
                             theme: "dark",
                             useTransparency: true,
                             onOk: function () {
                                 window.location = "/profile"
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
                                 window.location = "/profile"
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
             
           
        

         viewBuyer(id){
             this.props.history.push(`/view-buyer/${id}`);
         }
         
         editBuyer(id){
             this.props.history.push(`/add-buyer/${id}`);

         }

         componentDidMount(){
            BuyerService.getBuyer().then((res)=>{
                this.setState({buyer: res.data});
            })

         }
         //add buyer  
         addBuyer(){
             this.props.history.push('/add-buyer/_add');
         }

         searchBuyerName(event){

            this.setState({ searchId: event.target.value.substr(0,
    
                20)});
            }

            generateReport(){

                this.props.history.push('/buyerreport');
        
            }

    render() {
        let filterName = this.state.buyer.filter((

            buyer)=>{

                return buyer.name.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

                    

            }

        );


        return (
            <div>
                <div className="container">
                <div class="topnav" >
                     <a class="active" href="http://localhost:3000/profile">Buyer</a>
                     <a class="active" href="http://localhost:3000/Employee">Employee</a>
                     <a class="active" href="http://localhost:3000/Su pplier">Supplier</a>
  
                    
        </div>
                <h2 className="text-center">Buyer List</h2>
    
                    <button className="btn btn-primary" onClick={this.addBuyer}>Add Buyer</button>

                    <div className = "form-group col-md-4">

                       <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Enter Buyer Name" value={this.state.searchId} onChange={this.searchBuyerName.bind(this)}/>

                       </div>  
               
                <div className = "row">
                    
                    <table  className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Buyer Name</th>
                                <th> Buyer email</th>
                                <th> Buyer phone</th>
                                <th> Buyer userName</th>
                                <th> Buyer password</th>
                                <th> Buyer address</th>
                                <th> Actions</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                filterName.map(

                                    buyer=>
                                //this.state.buyer.map(
                                   // buyer =>
                                    <tr key = {buyer.id}>
                                        <td>{buyer.name} </td>
                                        <td>{buyer.email} </td>
                                        <td>{buyer.phone} </td>
                                        <td>{buyer.userName}</td>
                                        <td>{buyer.password}</td>
                                        <td>{buyer.address}</td>

                                        <td>
                                            <button onClick={()=> this.editBuyer(buyer.id)} className=" button-up ">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={()=> this.deleteBuyer(buyer.id)} className="button-dele">Delete</button>
                                            <button style={{marginLeft: "10px"}} onClick={()=> this.viewBuyer(buyer.id)} className="button-view">View</button>
                                        </td>

                                     </tr>   
                                )
                            }
                        </tbody>

                    </table>

                </div>
                <button className="btn btn-primary" onClick={()=>this.generateReport()}>Buyer Details report</button>
                </div>
                </div>
           
        );
    }
}

export default ListBuyerComponent;