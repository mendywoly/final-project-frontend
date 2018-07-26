import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'



class Table extends Component {
         

    
    render() {        
        return (
            <div>
                <ReactTable
                    filterable={true}
                    style={{height: '600px'}}
                    data={this.props.data}
                    columns={this.props.columns}
                />
            </div>
        );
    }
}

export default Table;
