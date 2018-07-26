import React, { Component, Fragment } from 'react';
import Adapter from './Adapter'
import { Segment, Button, List } from 'semantic-ui-react'
import ReportItem from './ReportItem'
import RequestReport from './RequestReport'

class Reports extends Component {
    
    state = {
        recent_reports: [],
        selectedReportDetails: [],
        reportValue: '',
        requestReportResponse: [],

    }

    handleChange = (e, { value }) => {
        this.setState({ value })
    }

    handleClick = () => {        
      Adapter.getRecentReports().then( r => r.json()).then(d => {          
          this.setState({ recent_reports: d})
      })
    }

    getRecentReports = () => {
      if (!!this.state.recent_reports.ReportRequestInfo) {
          return this.state.recent_reports.ReportRequestInfo.map( e =>  {
              return (
                <Fragment>
                    <List.Item>
                        <List.Content>{e.ReportType}</List.Content>
                        <List.Content floated='right'><Button onClick={() => this.handleDetails(e.ReportType) }>Add</Button></List.Content>
                    </List.Item>
                </Fragment>
              )
        })
      }
    }

    handleDetails = (rt) => {
        console.log('arg', rt);
        const foundReport = this.state.recent_reports.ReportRequestInfo.find( rr => rr.ReportType =  rt) 
        console.log('foundReport', foundReport);
        const foundReportDetails = Object.keys(foundReport).map( e =>  <li> e + ": " + foundReport[e]</li> )
        
        this.setState({ selectedReportDetails: foundReportDetails })
        // const foundReportDetails = []
        // for (var key in foundReport) {
        //     foundReportDetails.push( <li>`${key}: ${foundReport[key]}`</li>)
        //   }
        console.log(foundReportDetails);
        
    }
    
    
    handleGetReport = (event) => {
        event.preventDefault()
        console.log(this.state)
        // const reportName = this.state.reportValue
        // Adapter.requestReport(reportName).then(r => r.json())
        // .then( d => this.setState({  requestReportResponse: d.ReportRequestInfo}))
        // .then(console.log)
    }

   
    

    

    render() {
        return (
            <div>
                <br/>
                               
                <RequestReport />

                <div style={{width: '90%', margin: 'auto'}}>
          
                  
                        
                    <Segment>
                        <Button onClick={this.handleClick}>
                            View Recent Reports
                        </Button>
                        {this.state.recent_reports.HasNext === 'true' ? <button className="ui button"> Get Next</button> : null }
                        <ul>
                            {!!this.state.recent_reports.ReportRequestInfo? this.state.recent_reports.ReportRequestInfo.map( e => <ReportItem reportData={e} nextToken={this.state.recent_reports.NextToken} /> ): null}
                        </ul>
                        {/* <List divided verticalAlign='middle'>   
                            {this.getRecentReports()}
                        </List> */}
                    </Segment>
                    
                   

                    
                </div>
            </div>
        );
    }
}

export default Reports;
