import React, { Component } from 'react';
import Adapter from './Adapter'

class ReportItem extends Component {
    state= {
        show: false
    }

    handleClick = () => {        
        const value = this.state.show ? false : true
        this.setState({show: value})
    }

    getReport = (generatedReportId) => {
      console.log(generatedReportId);
        Adapter.requestReport(generatedReportId).then(r => r.json()).then(console.log)
    }
    
    
    render() {        
        const details = Object.keys(this.props.reportData).map( r => {
            return <li key={r.id}> {r}: {this.props.reportData[r]}</li>
        })
        
        return (
            <div>
                <li>{this.props.reportData.ReportType}</li>
                <button className="ui button" onClick={this.handleClick}>Get Details</button>
                <button className="ui button" onClick={() => this.getReport(this.props.reportData.GeneratedReportId)}>Get Report</button>
                <ul>
                    {this.state.show ? details : null}
                </ul>
            </div>
        );
    }
}

export default ReportItem;
