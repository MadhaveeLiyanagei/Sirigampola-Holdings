import React, { Component } from 'react'
import NoticesService from '../services/NoticesService';
import AdminEmployeeSideBar from './AdminEmployeeSideBar'

class CreateNoticesComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state={
            content: ''
        }
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.saveNotice=this.saveNotice.bind(this);
    }
    

    saveNotice = (e) =>{
        e.preventDefault();
        let adNotices = {content: this.state.content};
        console.log('adNotices => ' + JSON.stringify(adNotices));

        NoticesService.createNotice(adNotices).then(res =>{
            this.props.history.push('/adNotices');

        });

    }

    changeContentHandler=(event)=>{
        this.setState({content: event.target.value});
    }

    cancel(){
        this.props.history.push('/adNotices');

    }

    render() {
        return (
            <div>
                <>
                <AdminEmployeeSideBar/>
                </>
    
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Add Notice</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Notice Content : </label>
                                        <input placeholder="Add notice content here..." name="content" className="form-control" value={this.state.content} onChange={this.changeContentHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveNotice}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CreateNoticesComponent