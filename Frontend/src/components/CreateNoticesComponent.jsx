import React, { Component } from 'react'
import NoticesService from '../services/NoticesService';
import AdminEmployeeSideBar from './AdminEmployeeSideBar'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class CreateNoticesComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state={
            content: '',
            contentError: ''
        }
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.saveNotice=this.saveNotice.bind(this);
    }
    

    saveNotice = (e) =>{
        e.preventDefault();
        let adNotices = {content: this.state.content};
        const isValid = this.validate();
        if(isValid){
        console.log('adNotices => ' + JSON.stringify(adNotices));

        NoticesService.createNotice(adNotices).then(res =>{
            this.notify();
            this.props.history.push('/adNotices');

        });
      }

    }

    notify(){
        toast.success('Notice added successfully!', {position: toast.POSITION.TOP_CENTER})
    }
 
    notify1(){
        toast.error('Notice was not added!', {position: toast.POSITION.TOP_CENTER})
    }

    changeContentHandler=(event)=>{
        this.setState({content: event.target.value});
    }

    cancel(){
        this.notify1();
        this.props.history.push('/adNotices');

    }

    validate = () =>{
        let contentError = '';

        if(!this.state.content){
            contentError="A notice is required";
        }
        if(contentError){
            this.setState({contentError});
            return false;
        }

        return true;

    }

    render() {
        return (
            <div>
                
    
                <div className="container">
                    <div className="row">
                    <>
                    <AdminEmployeeSideBar/>
                    </>
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center"><u>Add Notice</u></h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group"><br></br>
                                        <label><b>Notice Content : </b></label>
                                        <input placeholder="Add notice content here..." name="content" className="form-control" value={this.state.content} onChange={this.changeContentHandler}/>
                                        <div style={{fontSize: 12, color:"red"}}>{this.state.contentError} </div>
                                    </div>
                                    <br></br>
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