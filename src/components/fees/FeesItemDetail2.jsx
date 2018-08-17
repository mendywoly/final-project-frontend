import React, { Component } from 'react';
import { Segment, Card } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'


class FeesItemDetail2 extends Component {


    render() {
        const {msku, fnsku, asin, product_name, product_group, product_size_tier, estimated_fee_total, estimated_referral_fee_per_unit, estimated_variable_closing_fee, estimated_order_handling_fee_per_order, estimated_pick_pack_fee_per_unit, estimated_weight_handling_fee_per_unit, expected_fulfillment_fee_per_unit, sales_price} = this.props.details
        const {units_shipped_last_90_days} = this.props.details.product

        return (
            <Card style={{textAlign: 'center'}} >   
                <Card.Content>
                <h1>{units_shipped_last_90_days}</h1>
                <h4 >{product_name}</h4>     
                <p>{product_group}</p>
                <p>Percentage: {Math.floor( parseFloat(estimated_referral_fee_per_unit) / parseFloat(sales_price) * 100 )}%</p>
                {this.props.mode === 'sizing' ?
                     <table className=" ui celled table">
                     <tbody>                        
                         <tr>
                             <td>{msku}</td>
                             <td>{ fnsku}</td>
                             <td>{ asin}</td>
                         </tr>
                         <tr>
                             <td>{ product_group}</td>
                             <td colSpan="2" >{ product_size_tier}</td>
                         </tr>
                         <tr>
                             <td>estimated fee total</td>
                             <td>{ estimated_fee_total}</td>
                             <td className="ui input"><input type="text"/></td>
                         </tr>
                         <tr>
                             <td>estimated referral fee per unit</td>
                             <td>{ estimated_referral_fee_per_unit}</td>
                             <td className="ui input"><input type="text"/></td>
                         </tr>
                         <tr>
                             <td>expected fulfillment fee per unit</td>
                             <td>{ expected_fulfillment_fee_per_unit}</td>
                             <td className="ui input"><input type="text"/></td>
                         </tr>
                         <tr>
                             <td>sales price</td>
                             <td>{ sales_price}</td>
                             <td className="ui input"><input type="text"/></td>
                         </tr>
                     </tbody>                     
                 </table>
                : null}
                </Card.Content>
            </Card>
        );
    }
}

export default FeesItemDetail2;
