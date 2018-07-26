import ReactTable from "react-table";
import 'react-table/react-table.css'

import React, { Component } from 'react';

class FeesTable extends Component {
    convertToInteger = () => {
        return this.props.fees.map( data => {
            return { ...data, 
                longest_side: parseFloat(data.longest_side),  
                median_side: parseFloat(data.median_side),  
            }
        } )
      }
      

    render() {
        const columns = [
            {Header: 'Asin',accessor: 'asin'},
            {Header: 'Sku',accessor: 'sku'},
            {Header: 'longest_side',accessor: 'longest_side'},
            {Header: 'median_side',accessor: 'median_side'},
            {Header: 'shortest_side',accessor: 'shortest_side'},
            {Header: 'length_and_girth',accessor: 'length_and_girth'},
            {Header: 'product_group',accessor: 'product_group'},
            {Header: 'product_size_tier',accessor: 'product_size_tier'},
            {Header: 'item_package_weight',accessor: 'item_package_weight'},
        ]
        return (
            <div>
                <ReactTable
                    data={this.convertToInteger()}
                    // resolveData={data => data.map(row => parseInt(row.median_side))}
                    columns={columns}
                    showPagination={true}
                    filterable={true}
                    style={{height: "600px", width: '80%'   }}
                />
            </div>
        );
    }
}

export default FeesTable;
