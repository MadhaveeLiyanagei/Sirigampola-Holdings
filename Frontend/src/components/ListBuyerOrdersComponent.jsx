import React, { Component } from 'react';
import BuyerOrdersService from '../services/BuyerOrdersService'
import SoloAlert from 'soloalert'

class ListBuyerOrdersComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            BuyerOrders: [],
            searchId:''
        }

        this.addBuyerOrders = this.addBuyerOrders.bind(this);
        this.editBuyerOrders = this.editBuyerOrders.bind(this);
        this.deleteBuyerOrders = this.deleteBuyerOrders.bind(this);

    }

    deleteBuyerOrders(id) {


        SoloAlert.confirm({

            title: "Confirm Delete",
            body: "Are you sure",
            theme: "dark",
            useTransparency: true,
            onOk: async function () {

                try {
                    BuyerOrdersService.deleteBuyerOrders(id)
                   await this.setState({
                        BuyerOrders: this.state.BuyerOrders.filter(BuyerOrders => BuyerOrders.id !== id)
                    });


                    SoloAlert.alert({
                        title: "Welcome!",
                        body: "Deletion is successful",
                        icon: "success",
                        theme: "dark",
                        useTransparency: true,
                        onOk: function () {
                            window.location = "/Orders"
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
                            window.location = "/Orders"
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

    viewBuyerOrder(id) {
        this.props.history.push(`/view-buyerorder/${id}`)
    }

    editBuyerOrders(id) {
        this.props.history.push(`/checkout/${id}`);
    }

    componentDidMount() {
        BuyerOrdersService.getBuyerOrders().then((res) => {
            this.setState({ BuyerOrders: res.data });

        });
    }

    addBuyerOrders() {

        this.props.history.push('/checkout/_add');

    }

    generateReport(){
        this.props.history.push('/buyerordersreport');
    }

  
    searchBuyerName(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});

    }
    render() {
        let filterUsername = this.state.BuyerOrders.filter((
            BuyerOrders)=>{
                return BuyerOrders.username.toLowerCase().indexOf(this.state.searchId.toLowerCase())!==-1;
                    
            }
        );
        return (
            <div className>
                <div className="container">
                    
                <h2 className="text-center">Buyer Orders</h2>
               {/* <div className="row">
                    <div>

                        <button className="btn btn-primary" onClick={this.addBuyerOrders}>Checkout</button>
                    </div>
        </div>*/}

                <div className = "form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Enter Buyer Name" value={this.state.searchId} onChange={this.searchBuyerName.bind(this)}/>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Address</th>
                                <th>Email Address</th>
                                <th>Contact</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                filterUsername.map(
                                    BuyerOrders=>
                                //this.state.BuyerOrders.map(
                                    //BuyerOrders =>
                                        <tr key={BuyerOrders.id}>
                                            <td>{BuyerOrders.username}</td>
                                            <td>{BuyerOrders.address}</td>
                                            <td>{BuyerOrders.email}</td>
                                            <td>{BuyerOrders.contact}</td>
                                            <td>{BuyerOrders.date}</td>
                                            <td>
                                                <button onClick={() => this.editBuyerOrders(BuyerOrders.id)} className="button-up"> Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteBuyerOrders(BuyerOrders.id)} className="button-dele">Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewBuyerOrder(BuyerOrders.id)} className="button-view ">View</button>
                                                
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                     
                    <button onClick={() => this.generateReport()} className ="btn-report"  > Monthly Report</button>
                </div>
                </div>
            </div>
        )
    }
}

export default ListBuyerOrdersComponent

