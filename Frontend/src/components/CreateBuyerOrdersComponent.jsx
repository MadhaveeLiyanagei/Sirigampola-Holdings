import React, { Component } from 'react'
import BuyerOrdersService from '../services/BuyerOrdersService';

class CreateBuyerOrdersComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            //step2
            id: this.props.match.params.id,
            username: '',
            email: '',
            address:'',
            contact:'',
            date:'', 
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveOrUpdateBuyerOrders = this.saveOrUpdateBuyerOrders.bind(this);
    }
    //step 3
    componentDidMount(){

        //step 4
        if(this.state.id === '_add'){
            return
        }else{
            BuyerOrdersService.getBuyerOrdersById(this.state.id).then((res) =>{
                let BuyerOrders = res.data;
                this.setState({username: BuyerOrders.username,
                    email: BuyerOrders.email,
                    address: BuyerOrders.address,
                    contact: BuyerOrders.contact,
                    date: BuyerOrders.date
                });
        });

        }

        
    }

    saveOrUpdateBuyerOrders = (e) => {
        e.preventDefault();
        let BuyerOrders = {username: this.state.username,email: this.state.email,address: this.state.address,contact: this.state.contact,date: this.state.date};
        console.log('BuyerOrders =>' + JSON.stringify(BuyerOrders));

        //step 5

        if(this.state.id === '_add'){
            BuyerOrdersService.CreateBuyerOrders(BuyerOrders).then(res =>{
                this.props.history.push('/Orders');
        });
        }else{
            BuyerOrdersService.updateBuyerOrders(BuyerOrders, this.state.id).then(res =>{
                this.props.history.push('/Orders');
        });
        }

        
    }

    changeUserNameHandler = (event)=>{
        this.setState({username: event.target.value});
    }

    changeEmailHandler = (event)=>{
        this.setState({email: event.target.value});
    }

    changeAddressHandler = (event)=>{
        this.setState({address: event.target.value});
    }

    changeContactHandler = (event)=>{
        this.setState({contact: event.target.value});
    }

    changeDateHandler = (event)=>{
        this.setState({date: event.target.value});
    }

    cancel(){
        this.props.history.push('/Orders');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className = "text-center">Checkout Form</h3>
        }else{
            return <h3 className = "text-center">Update Orders Details</h3>
        }
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className ="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name </label>
                                            <input placeholder = "User Name" name ="username" className="form-control"
                                                value={this.state.username} onChange={this.changeUserNameHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> E-mail </label>
                                            <input placeholder = "xxx@gmail.com" name ="email" className="form-control"
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Address </label>
                                            <input placeholder = "Address" name ="address" className="form-control"
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Contact Number </label>
                                            <input placeholder = "Contact" name ="contact" className="form-control"
                                                value={this.state.contact} onChange={this.changeContactHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Date </label>
                                            <input placeholder = "DD | MM | YY" name ="date" className="form-control"
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>

                                        
                                        

                                        
                                        <button className = "btn btn-success" onClick={this.saveOrUpdateBuyerOrders}>Save</button>
                                        <button className = "btn btn-danger" onClick={this.cancel.bind(this)}style={{marginLeft: "10px"}}>Cancel</button>
                                    
                                        
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