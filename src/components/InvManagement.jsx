import React, { Component } from 'react';
import Adapter from './Adapter'
import InvManagementDetail from './InvManagementDetail'
import 'react-table/react-table.css'
import { Card, Button } from 'semantic-ui-react'


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
        const filteredSkus = this.state.skus.filter( sku => sku.on_inv_management === true )
        return filteredSkus.sort( (a, b) =>   Math.floor((a.sellable_quantity + a.reserved_amz + a.in_bound_quantity) / (a.units_shipped_last_30_days / 30)) - Math.floor((b.sellable_quantity + b.reserved_amz + b.in_bound_quantity) / (b.units_shipped_last_30_days / 30))  )
        // return filteredSkus.sort( (a, b) =>   (Math.floor((b.sellable_quantity + b.reserved_amz + b.in_bound_quantity) / (b.units_shipped_last_30_days / 30)) < b.lead_time) - (Math.floor((a.sellable_quantity + a.reserved_amz + a.in_bound_quantity) / (a.units_shipped_last_30_days / 30)) < a.lead_time)  )
    }


    handleChange = (e, {value}) => {
      Adapter.addSkuToManageInv(value).then(r =>r.json()).then(this.fetchSkus)
    }

    handleUpdateInventory = () => {
        Adapter.updateInventoryBySku().then(r=>r.json()).then(data => this.setState({ skus: data }))
    }
    
    
    
    render() {                
        return (
            <div style={{width: '80%', margin: 'auto'}}>
                <br/>
                <br/>
                <Button onClick={this.handleUpdateInventory}>Update Inventory</Button>
                <br/>            
                <br/>
            <Card.Group itemsPerRow={3}>
                <br/>
                    {this.tableData().map(element =>  <React.Fragment><InvManagementDetail product={element} fetchSkus={this.fetchSkus} {...this.props}/><br/></React.Fragment> )}
                <br/>
            </Card.Group>
            </div>
        );
    }
}

export default InvManagement;
