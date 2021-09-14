import React, { Component } from 'react'
import NoticesService from '../services/NoticesService';


/*View all the details of a single record*/

class ViewNoticesComponent extends Component {

    constructor(props){
        super(props)

            this.state = {
                id: this.props.match.params.id,
                
                adNotices: []
            }

           
        
    }

    componentDidMount(){
        NoticesService.getNoticesById(this.state.id).then(res =>{
            this.setState({adNotices: res.data});
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Notices Details</h3>
                    <div className ="card-body">
                        <div className="row">
                            <label><b>Notice ID:</b> </label>
                            <div>{this.state.adNotices.id}</div>
                        </div> 
                        <br></br>
                        <br></br>
                        <div className="row">
                            <label><b>Date: </b></label>
                            <div>{this.state.adNotices.content}</div>
                        </div>
                        <br></br>
                        <br></br>
                        
                    </div>
                </div>
            </div>
        );
    }
}


export default ViewNoticesComponent;