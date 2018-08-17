import React, { Component } from 'react';
import {Dropdown} from 'semantic-ui-react'
class RequestReport extends Component {
    state = {
        reportName: '',
        startDate: '',
        endDate: '',
        includeDate: false
    }


    handleReportChange = (event) => {
        if (event.target.name === 'reportName') {
            this.setState({[event.target.name]: event.target.value})
        }
        else {
            this.setState({[event.target.name]:event.target.value})
        }
      }

    handleReportRequest = (event) => {
      event.preventDefault()
        const fetchBody = this.state.includeDate ?  {report_name: this.state.reportName, start_date: new Date(this.state.startDate).toISOString(), end_date: new Date(this.state.endDate).toISOString()} :  {report_name: this.state.reportName}
      const config = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            fetchBody
        })
      }      
      fetch(`http://localhost:4000/requestReport/`, config).then(r=> r.json()).then(console.log)
    }

    handleIncludeDate = (event) => {
        event.preventDefault()
        this.state.includeDate ? this.setState({includeDate: false }) : this.setState({includeDate: true })        
    }
    
    handleSelectReport = (d) => {
      this.setState({reportName: d.value})

    }
    
      
    render() {
        const reportOptions = [
            {text: 'Inv Health', value: '_GET_FBA_FULFILLMENT_INVENTORY_HEALTH_DATA_'},
            {text: 'Reserved', value: '_GET_RESERVED_INVENTORY_DATA_'},
        ]
        const dateData = <React.Fragment>
                         <input 
                            // required
                            type="date" 
                            name="startDate"
                            value={this.state.startDate}
                            onChange={this.handleReportChange}
                        />
                        <br/>
                        <input 
                            // required
                            type="date" 
                            name="endDate"
                            value={this.state.endDate} 
                            onChange={this.handleReportChange}
                        />
                        </React.Fragment>
        return (
            <div className="ui segment">
                      <form onSubmit={this.handleReportRequest}>
                      <Dropdown 
                      placeholder='Select Report' 
                      selection 
                      options={reportOptions}
                      onChange={(e,d) => this.handleSelectReport(d)}
                      />
                      <br/>
                        <input 
                            // required
                            type="text"
                            value={this.state.reportName}
                            onChange={this.handleReportChange}
                            name="reportName"
                        />
                        <br/>
                        {this.state.includeDate ? dateData : null }
                        <br/>
                        <button onClick={this.handleIncludeDate}>{ this.state.includeDate ? 'Remove Date' : "Add Date"}</button>
                        <button type="submit">Get Report</button>
                    </form>
            </div>
        );
    }
}

export default RequestReport;
