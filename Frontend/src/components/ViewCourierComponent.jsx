import React, { Component } from 'react'
import CourierService from '../services/CourierService'

class ViewCourierComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            courier: {}
        }
    }

    componentDidMount(){
        CourierService.getCourierById(this.state.id).then( res => {
            this.setState({courier: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View CourierDetails</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Courier Service Name: </label>
                            <div> { this.state.courier.name }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Address: </label>
                            <div> { this.state.courier.address }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Phone Number: </label>
                            <div> { this.state.courier.phone_number }</div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <label> Email Address: </label>
                            <div> { this.state.courier.email }</div>
                        </div>           
                    </div>

                </div>

            </div>
        )
    }
}

export default ViewCourierComponent
