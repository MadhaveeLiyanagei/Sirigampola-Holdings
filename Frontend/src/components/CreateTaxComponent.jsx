import React, { Component } from 'react';
import TaxService from '../services/TaxService';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

toast.configure()
class CreateTaxComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            taxID: this.props.match.params.taxID,
            productID: '',
            countryCode: '',
            preTaxPrice: '',
            taxRate: '',
            subTotal: '',
            vat: '',
            totalPrice: '',
            productIDError: '',
            countryCodeError: '',
            preTaxPriceError: '',
            taxRateError: '',
            subTotalError: '',
            vatError: '',
            totalPriceError: '',

        }
        
         
        this.saveOrUpdateTax = this.saveOrdUpdateTax.bind(this);

    }

    
    //step 3
    componentDidMount(){

        //step 4
        if(this.state.taxID == -1) {
            return
        }else {
            TaxService.getTaxById(this.state.taxID).then( (res) =>{
                let tax =  res.data;
                this.setState({productID: tax.productID, 
                    countryCode: tax.countryCode, 
                    preTaxPrice: tax.preTaxPrice, 
                    taxRate: tax.taxRate, 
                    subTotal: tax.subTotal, 
                    vat: tax.vat,
                    totalPrice: tax.totalPrice
                });
            });
        }  
    }

    notify(){

        toast.warn('Tax Added Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})

    }

    notify1(){

        toast.warn('Tax Updated Successfully!', {position: toast.POSITION.TOP_CENTER, autoClose: 2000})
    }


    validate = () =>{

        let productIDError='';
        let countryCodeError='';
        let preTaxPriceError='';
        let taxRateError='';
        let subTotalError='';
        let vatError='';
        let totalPriceError='';

       
        if(!this.state.productID){
            productIDError = "Please fill out this field";
        }

        if(!this.state.countryCode){
             countryCodeError = "Please fill out this field";
        }

        if(!this.state.preTaxPrice){
            preTaxPriceError = "Please fill out this field";
        }

        if(!this.state.taxRate){
            taxRateError = "Please fill out this field";
        }

        if(!this.state.subTotal){
            subTotalError = "Please fill out this field";
        }

        if(!this.state.vat){
            vatError = "Please fill out this field";
        }

        if(!this.state.totalPrice){
            totalPriceError = "Please fill out this field";
        }

         
        if(productIDError || countryCodeError || preTaxPriceError || taxRateError || subTotalError || vatError || totalPriceError){

            this.setState({productIDError,countryCodeError,preTaxPriceError,taxRateError,subTotalError,vatError,totalPriceError});

            return false;

        }
        return true;
    }

    saveOrdUpdateTax = (e) => {
        e.preventDefault();
        let tax = {productID: this.state.productID, countryCode: this.state.countryCode, preTaxPrice: this.state.preTaxPrice, taxRate: this.state.taxRate, subTotal: this.state.subTotal, vat: this.state.vat, totalPrice: this.state.totalPrice};
        const isValid = this.validate();
        if(isValid){
        console.log('tax => ' + JSON.stringify(tax));

        //step 5
        if(this.state.taxID == -1) {
            TaxService.createTax(tax).then(res =>{
                this.notify();
                this.props.history.push('/Tax');
            }).catch(error=> {alert("Income Not Available")});
        }else {  
            TaxService.updateTax(tax, this.state.taxID).then( res => {
                this.notify1();
                this.props.history.push('/Tax');
            }).catch(error=> {alert("Tax Not Available")});        
        }  
    }    
    }

    changeProductIDHandler= (event) => {
        this.setState({productID: event.target.value});
    }
    changeCountryCodeHandler= (event) => {
        this.setState({countryCode: event.target.value});
    }
    changePreTaxPriceHandler= (event) => {
        this.setState({preTaxPrice: event.target.value});
    }
    changeTaxRateHandler= (event) => {
        this.setState({taxRate: event.target.value});
    }
    changeSubTotalHandler= (event) => {
        this.setState({subTotal: event.target.value});
    }
    changeVatHandler= (event) => {
        this.setState({vat: event.target.value});
    }
    changeTotalPriceHandler= (event) => {
        this.setState({totalPrice: event.target.value});
    }

    cancel(){
        this.props.history.push('/Tax');
    }

    getTitle(){
        if(this.state.taxID == -1){
            return <h3 className="text-center">Add Tax</h3>
        }else{
            return <h3 className="text-center">Update Tax</h3>
        }
    }


    render() {
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                             
                               <div className="card-body">
                                   <form>
                                       <div className = "form-group">
                                           <label> Product ID :</label>
                                           <input placeholder="Product ID" name="productID" className="form-control"
                                                value={this.state.productID} onChange={this.changeProductIDHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.productIDError}</div>
                                       </div>
                                       <div className = "form-group">
                                           <label> Country code :</label>
                                           <input placeholder="Country code" name="countryCode" className="form-control"
                                                value={this.state.countryCode} onChange={this.changeCountryCodeHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.countryCodeError}</div>
                                       </div>
                                       <div className = "form-group">
                                           <label> Pre Tax price :</label>
                                           <input placeholder="pre-tax price" name="preTaxPrice"  className="form-control"
                                                value={this.state.preTaxPrice} onChange={this.changePreTaxPriceHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.preTaxPriceError}</div>
                                       </div>
                                       <div className = "form-group">
                                           <label> Tax rate :</label>
                                          <input placeholder="Tax rate" name="taxRate" className="form-control" 
                                               value={this.state.taxRate} onChange={this.changeTaxRateHandler}/>
                                               <div style={{fontSize: 12, color: "red"}}>{this.state.taxRateError}</div>
                                                  
                                       </div>
                                       <div className = "form-group">
                                           <label> Sub total :</label>
                                           <input placeholder="Sub total" name="subTotal" className="form-control"
                                                value={this.state.subTotal} onChange={this.changeSubTotalHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.subTotalError}</div>
                                       </div>
                                       <div className = "form-group">
                                           <label> VAT :</label>
                                           <input placeholder="VAT" name="vat" className="form-control"
                                                value={this.state.vat} onChange={this.changeVatHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.vatError}</div>
            
                                       </div>
                                       <div className = "form-group">
                                           <label> Total price :</label>
                                           <input placeholder="Total price" name="totalPrice" className="form-control"
                                                value={this.state.totalPrice} onChange={this.changeTotalPriceHandler}/>
                                                <div style={{fontSize: 12, color: "red"}}>{this.state.totalPriceError}</div>
                                       </div>
                                        <br></br>
                                       <button className="btn btn-success" onClick={this.saveOrUpdateTax}>Save</button>
                                       <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                   </form>
                               </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default CreateTaxComponent;

