import React, { Component } from 'react'
import BuyerOrdersService from '../services/BuyerOrdersService';
import { toast } from 'react-toastify';
import SoloAlert from 'soloalert'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class CreateBuyerOrdersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step2
            id: this.props.match.params.id,
            username: '',
            email: '',
            address: '',
            contact: '',
            date: '',
            userNameError: '',
            emailError: '',
            addressError: '',
            contactError: '',
            dateError: '',
            emailvError: '',
            contactvError:''


        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveOrUpdateBuyerOrders = this.saveOrUpdateBuyerOrders.bind(this);
    }
    //step 3
    componentDidMount() {

        //step 4
        if (this.state.id === '_add') {
            return
        } else {
            BuyerOrdersService.getBuyerOrdersById(this.state.id).then((res) => {
                let BuyerOrders = res.data;
                this.setState({
                    username: BuyerOrders.username,
                    email: BuyerOrders.email,
                    address: BuyerOrders.address,
                    contact: BuyerOrders.contact,
                    date: BuyerOrders.date
                });

            });
        }
    }

    notify() {
        toast.warn('Order Added Successfully!', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })

    }

    notify1() {
        toast.warn('Order Updated Successfully!', { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
    }


    validate = () => {
        let userNameError = '';
        let emailError = '';
        let addressError = '';
        let contactError = '';
        let dateError = '';

        if (!this.state.username) {
            userNameError = "Please fill out this field";
        }

        if (!this.state.email) {
            emailError = "Please fill out this field";
        }

        if (!this.state.address) {
            addressError = "Please fill out this field";
        }

        if (!this.state.contact) {
            contactError = "Please fill out this field";
        }

        if (!this.state.date) {
            dateError = "Please fill out this field";
        }

        if (userNameError || emailError || addressError || contactError || dateError) {
            this.setState({ userNameError, emailError, addressError, contactError, dateError });
            return false;
        }

        return true;

    }

    emailValidation() {
        let emailvError='';

        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({
                emailvError: "You should enter a valid E-mail!"
            });
            return false;
        }
        return true;
    }

    contactNumberValidation(){
        if(this.state.contact.length>10 || this.state.contact.length<10){
            this.setState({
                contactvError: "You should enter a valid Contact Number!"
            });
            return false;
        }
        return true;
    }
   
    
    /*nameValidation(){
        const regex = /^(A-Za-z)$/i;
        if (!this.state.username || regex.test(this.state.username) === false) {
            this.setState({
                namevError: "You cannot Enter only numbers!"
            });
            return false;
        }
        return true;
    }*/


    saveOrUpdateBuyerOrders = (e) => {
        e.preventDefault();
        let BuyerOrders = { username: this.state.username, email: this.state.email, address: this.state.address, contact: this.state.contact, date: this.state.date };
        const isValid = this.validate() && this.emailValidation() && this.contactNumberValidation() ;
        if (isValid) {
            console.log('BuyerOrders =>' + JSON.stringify(BuyerOrders));

            //step 5

            if (this.state.id === '_add') {
                BuyerOrdersService.CreateBuyerOrders(BuyerOrders).then(res => {
                    this.notify();
                    this.props.history.push('/Home');
                }).catch(error => { alert("Order Not Available") });
            } else {
                BuyerOrdersService.updateBuyerOrders(BuyerOrders, this.state.id).then(res => {
                    this.notify1();
                    this.props.history.push('/Orders');
                }).catch(error => { alert("Order Not Available") });
            }
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value});
    }

    changeContactHandler = (event) => {
        this.setState({ contact: event.target.value });
    }

    changeDateHandler = (event) => {
        this.setState({ date: event.target.value });
    }


    cancel() {
        this.props.history.push('/Orders');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Checkout Form</h3>
        } else {
            return <h3 className="text-center">Update Orders Details</h3>
        }
    }
    render() {
        return (

            <div>
                {
                    this.getTitle()
                }
                <div className="containerForm"  >
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ height: 600 }}>
                            {/* {
                                this.getTitle()
                            }*/}
                            <div className="card-body"  >
                                <form>
                                    <div className="form-group">
                                        <label><b> First Name: </b> </label>
                                        <input placeholder="User Name" name="username"  className="form-control"
                                            value={this.state.username} onChange={this.changeUserNameHandler} />
                                        <div style={{ fontSize: 14, color: "red" }}>{this.state.userNameError}</div>
                                        <div style={{ fontSize: 14, color: "red" }}>{this.state.namevError}</div>
                                        <br></br>
                                    </div>

                                    <div className="form-group">
                                        <label><b>E-mail:</b>  </label>
                                        <input placeholder="xxx@gmail.com" name="email"  className="form-control"

                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                       
                                        <div style={{ fontSize: 14, color: "red" }}>{this.state.emailError}</div>
                                        <div style={{ fontSize: 14, color: "red" }}>{this.state.emailvError}</div>                                        
                                        <br></br>
                                    </div>

                                    <div className="form-group">
                                        <label><b> Address:</b> </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />                                       
                                        <div style={{ fontSize: 14, color: "red" }}>{this.state.addressError}</div>
                                        <br></br>
                                    </div>


                                    <div className="form-group">
                                        <label> <b>Contact Number: </b></label>
                                        <input placeholder="Contact" name="contact" className="form-control"
                                            value={this.state.contact} onChange={this.changeContactHandler} />                                       
                                        <div style={{ fontSize: 14, color: "red" }}>{this.state.contactError}</div>
                                        <div style={{ fontSize: 14, color: "red" }}>{this.state.contactvError}</div> 
                                        <br></br>
                                    </div>

                                    <div className="form-group">
                                        <label><b> Date:</b> </label>
                                        <input placeholder="DD-MM-YY" type="date" name="date" className="form-control"
                                            value={this.state.date} onChange={this.changeDateHandler} />
                                       
                                        <div style={{ fontSize: 14, color: "red" }}>{this.state.dateError}</div>
                                        <br></br>
                                    </div>

                                    {/*<button className="btn_save" onClick={this.saveOrUpdateBuyerOrders}>Save</button>
                                    <button className="btn_cancel_cancel" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel </button>*/}
                                    <table className="invntry_tbl_header">
                                        <tbody>
                                            <th>
                                                <center>
                                                    <button
                                                        className="btn_save"
                                                        onClick={this.saveOrUpdateBuyerOrders}
                                                    >
                                                        <b>Save</b>
                                                    </button>
                                                </center>
                                            </th>
                                            <th>
                                                <center>
                                                    <button
                                                        className="btn_cancel_cancel"
                                                        onClick={this.cancel.bind(this)}
                                                    >
                                                        <b> Cancel</b>
                                                    </button>
                                                </center>
                                            </th>
                                        </tbody>
                                    </table>


                                </form>



                            </div>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}

export default CreateBuyerOrdersComponent