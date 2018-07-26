import React, { Component } from 'react';
import Adapter from './Adapter'
import InvManagementDetail from './InvManagementDetail'
import 'react-table/react-table.css'


class InvManagement extends Component {

    state = {
        skus: [],

    }

    componentDidMount = () => {
        this.fetchSkus()
    }

    fetchSkus = () => {
        Adapter.getAllSkus().then(r => r.json()).then(d => {
            this.setState({ skus: d })
        })
    }
    

    notAddedSkus = () => {
        const notAddedSkus = this.state.skus.filter( sku => sku.on_inv_management === 'false' )
        return notAddedSkus.map(sku => {
            return { key: sku.msku, value: sku.id, text: sku.msku }
        })
    }

    addedSkus = () => {
        const notAddedSkus = this.state.skus.filter( sku => sku.on_inv_management === 'true' )
        return notAddedSkus.map(sku => {
            return { key: sku.msku, value: sku.id, text: sku.msku }
        })
    }

    tableData = () => {
        return this.state.skus.filter( sku => sku.on_inv_management === true )
    }

    tableColumns = () => {
      return [
        {Header: 'Asin',accessor: 'asin'},
        {Header: 'Fnsku',accessor: 'fnsku'},
        {Header: 'Msku',accessor: 'msku'},
        {Header: 'Available Inv',accessor: 'quantity_amz'},
        {Header: 'Display?',accessor: 'on_inv_management'},
      ]
    }

    handleChange = (e, {value}) => {
      Adapter.addSkuToManageInv(value).then(r =>r.json()).then(this.fetchSkus)
    }
    
    
    render() {        
        console.log(this.state.skus);
        
        return (
            <div>
                <br/>
                    {this.tableData().map(element =>  <div><InvManagementDetail product={element} fetchSkus={this.fetchSkus} {...this.props}/><br/></div> )}
                <br/>
            </div>
        );
    }
}

export default InvManagement;
