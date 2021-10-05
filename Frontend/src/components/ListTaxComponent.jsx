import React, { Component } from 'react';
import TaxService from '../services/TaxService';
import { Button } from './Button';
import './HeaderFinance.css';
import SoloAlert from 'soloalert'
import {Link } from "react-router-dom";


class ListTaxComponent extends Component {
   constructor(props) {
       super(props)

       this.state = {
              taxes: [],
              searchId:''
               
       }
       this.addTax = this.addTax.bind(this);
       this.editTax = this.editTax.bind(this);
       this.deleteTax = this.deleteTax.bind(this);
       }


       deleteTax(taxID) {
           
        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure ?",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    TaxService.deleteTax(taxID)
                   await this.setState({
                        taxes: this.state.taxes.filter(tax => tax.taxID !== taxID)
                    });


                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/Tax"
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
                            window.location = "/Tax"
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

    viewTax(taxID){
        this.props.history.push(`/view-tax/${taxID}`);
    }

    editTax(taxID){
        this.props.history.push(`/add-tax/${taxID}`);
    }

    addTax(){
        this.props.history.push('/add-tax/-1');
    }


    componentDidMount(){
        TaxService.getTaxes().then((res) => {
                this.setState({ taxes: res.data});
        });
}

searchProductID(event){

    this.setState({ searchId: event.target.value.substr(0,

        20)});

    }


    render() {

        let filterTax = this.state.taxes.filter((

            taxes)=>{

                return taxes.productID.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;

                    

            }

        );

        
        var subTotal = 0;
        var totalPrice = 0;
         
        return ( 
            <div>
                <br></br>
                  <div className="container">  
                 
                 <div class="topnav" >
                     <a href="http://localhost:3000/Finance">Income</a>
                     <a href="http://localhost:3000/Expense">Expense</a>
                     <a class="active" href="http://localhost:3000/Tax">Tax Rates</a>
                     <a href="http://localhost:3000/Chart">Reports & Graphs</a>
        </div> 
      

                <h2 className="text-center">Tax Table</h2>
                     <div id="outer">
                     <div class="inner">  <button className="btn btn-primary" style={{marginRight:"2px"}} onClick={this.addTax}>+ New Tax</button> </div>
                     <div class="inner">  <input type="text" class="form-control" style={{marginLeft:"30px"}} placeholder="Search ProductID" value={this.state.searchId} onChange={this.searchProductID.bind(this)}/></div>
                     </div>
                    <div className = "form-group col-md-4">

                     
                    </div>
                <div className ="row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Country code</th>
                                        <th>Pre-tax price</th>
                                        <th>Tax rate %</th>
                                        <th>Sub total</th>
                                        <th>VAT %</th>
                                        <th>Total</th>
                                      {/*  <th>Actions</th> */}
                                      {/*  <th>***********Actions************</th> */}
                                         <th>Actions</th> 
                                    </tr>
                            </thead>

                            <tbody>
                                {
                                     filterTax.map(
                                        tax=>
                                        
                                    //this.state.taxes.map(
                                       // tax =>
                                        
                                        <tr key = {tax.taxID}>
                                            <td> {tax.productID}</td>
                                            <td> {tax.countryCode}</td>
                                            <td> {tax.preTaxPrice}</td>
                                            <td> {tax.taxRate}</td>
                                            <td> {subTotal =  (tax.preTaxPrice + (tax.preTaxPrice*tax.taxRate/100))}</td>
                                            <td> {tax.vat}</td>
                                            <td> {totalPrice = (subTotal + (subTotal*tax.vat/100))}</td>
                                            <td>
                                               <button onClick={ () => this.editTax(tax.taxID)} className="button-up">Update </button>
                                               <button style={{marginLeft: "4px"}} onClick={ () => this.deleteTax(tax.taxID)} className="button-dele">Delete </button>
                                               <button style={{marginLeft: "4px"}} onClick={ () => this.viewTax(tax.taxID)} className="button-view">View </button>
                                            </td>
                                             

                                        </tr>
                                    
                                     )
                                }
                            </tbody>
                        </table>
                      
                         

                        
                                 

                </div>
                 <Link to="/TaxReport"><button className="btn btn-success">Generate Report  </button> </Link>

                   
                </div>  


                 
                
                 
            </div>

            

            
        )

         
    }

    
    
}

export default ListTaxComponent