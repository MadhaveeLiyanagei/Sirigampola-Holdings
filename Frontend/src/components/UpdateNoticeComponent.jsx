import React, { Component } from 'react'
import NoticesService from '../services/NoticesService';


class UpdateNoticeComponent extends Component { 
    constructor(props) {
        super(props)

        this.state={
            id: this.props.match.params.id,
            content: ''
        }
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.updateNotice=this.updateNotice.bind(this);
    }
    
    componentDidMount(){
        NoticesService.getNoticesById(this.state.id).then((res) =>{
            let adNotices = res.data;
            this.setState({content: adNotices.content});
        });
    }

    updateNotice = (e) =>{
        e.preventDefault();
        let adNotices = {content: this.state.content};
        console.log('adNotices => ' + JSON.stringify(adNotices));

        NoticesService.updateNotice(adNotices, this.state.id).then(res => {
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
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Update Notice</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Notice Content : </label>
                                        <input placeholder="Add notice content here..." name="content" className="form-control" value={this.state.content} onChange={this.changeContentHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateNotice}>Save</button>
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

export default UpdateNoticeComponent