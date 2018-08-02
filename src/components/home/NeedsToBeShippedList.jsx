import React, { Component } from 'react';
import InvManagementDetail from '../InvManagementDetail'
import Adapter from '../Adapter'
class NeedsToBeShippedList extends Component {

    state = {
        skus: [],

    }
    componentDidMount = () => {
        this.fetchSkus()
    }
    fetchSkus = () => {
        Adapter.getAllSkus().then(r => r.json()).then(d => {
            const addedSkus = d.filter( sku => sku.on_inv_management === true )
            this.setState({ skus: addedSkus })
        })
    }
    filterOnlyLowStock = () => {
        const newArr = []
        this.state.skus.forEach(sku => {
            const fullStock = sku.sellable_quantity + sku.reserved_amz + sku.in_bound_quantity
            const days_until_empty = Math.floor(fullStock / (sku.units_shipped_last_30_days / 30))
            const needsToBeShipped = days_until_empty < sku.lead_time

            needsToBeShipped ? newArr.push(sku) : null
        });
        
        return newArr
    }
    
    
    render() {
        return (
            <div>
                {this.filterOnlyLowStock().map(element =>  <React.Fragment><InvManagementDetail product={element} fetchSkus={this.fetchSkus} {...this.props}/><br/></React.Fragment> )}
            </div>
        );
    }
}

export default NeedsToBeShippedList;
