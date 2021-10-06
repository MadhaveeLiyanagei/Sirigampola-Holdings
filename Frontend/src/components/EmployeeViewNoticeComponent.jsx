import React, { Component } from "react";
import NoticesService from "../services/NoticesService";
import EmployeeNavBar from "./EmployeeNavBar";
import SoloAlert from "soloalert";

class EmployeeViewNoticeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adNotices: [],
    };
    
  }

  

  componentDidMount() {
    NoticesService.getNotices().then((res) => {
      this.setState({ adNotices: res.data });
    });
  }
  



  render() {
    var tableStyle = {
      border: "0.5px solid black",
    };
    return (
      <div>
        <div className="row">
        <>
            <EmployeeNavBar />
          </>
          <h2 className="text-center">
            <br></br>
            <br></br>
            <u>Notices List</u>
            <br></br>
            <br></br>
          </h2>
          
        </div>

        <div className="row">
          <center>
            <br></br>
            <table className="tabletxtclr" style={tableStyle}>
              <thead>
                <tr style={tableStyle}>
                  <th>
                    <center>
                      <h5>Notice</h5>
                    </center>
                  </th>
                </tr>
              </thead>

              <tbody>
                {this.state.adNotices.map((adNotices) => (
                  <tr key={adNotices.id}>
                    <td style={tableStyle}>{adNotices.content}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
          </center>
        </div>
      </div>
    );
  }
}
export default EmployeeViewNoticeComponent;
