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

    handleReserved = () => {
    //   console.log(this.props.reportData.GeneratedReportId)
      Adapter.loadReportsToDatabase('reserved', this.props.reportData.GeneratedReportId).then(r => r.json())
      .then(console.log)
    }


    handleInvHealth = () => {
        // console.log(this.props.reportData.GeneratedReportId)
        Adapter.loadReportsToDatabase('invHealth', this.props.reportData.GeneratedReportId).then(r => r.json())
      .then(console.log)
      }
    
    
    
    
    render() {        
        const details = Object.keys(this.props.reportData).map( r => {
            return <li key={r.id}> {r}: {this.props.reportData[r]}</li>
        })
        const reservedButton = <button className="ui button" onClick={this.handleReserved}>Load Reserved</button>
        const invHealthButton = <button className="ui button" onClick={this.handleInvHealth}>Load Inv Health</button>

        return (
            <div>
                <li>{this.props.reportData.ReportType}</li>
                {this.props.reportData.ReportType === '_GET_RESERVED_INVENTORY_DATA_' ? reservedButton : null }
                {this.props.reportData.ReportType === '_GET_FBA_FULFILLMENT_INVENTORY_HEALTH_DATA_' ? invHealthButton : null }
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
