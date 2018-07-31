import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class FeesItemDetail extends Component {

    render() {
        const {sku, fnsku, asin, product_name, product_group, product_size_tier, estimated_fee_total, estimated_referral_fee_per_unit, estimated_variable_closing_fee, estimated_order_handling_fee_per_order, estimated_pick_pack_fee_per_unit, estimated_weight_handling_fee_per_unit, expected_fulfillment_fee_per_unit, sales_price} = this.props.details
        return (
            <React.Fragment>
                <tr>
                    <td><Link to={`/products/` + this.props.details.product_id}>{sku}</Link></td>
                    <td>{fnsku}</td>
                    <td>{asin}</td>
                    <td>{product_name}</td>
                    <td>{product_group}</td>
                    <td>{product_size_tier}</td>
                    <td>{estimated_fee_total}</td>
                    <td>{estimated_variable_closing_fee}</td>
                    {/* <td>{estimated_order_handling_fee_per_order}</td>
                    <td>{estimated_pick_pack_fee_per_unit}</td>
                    <td>{estimated_weight_handling_fee_per_unit}</td> */}
                    <td>{expected_fulfillment_fee_per_unit}</td>
                    <td>{sales_price}</td>
                    <td>{estimated_referral_fee_per_unit}</td>                
                    <td>{parseFloat( parseFloat(estimated_referral_fee_per_unit) / parseFloat(sales_price) * 100 ).toFixed(2) }</td>
                </tr>
            </React.Fragment>
        );
    }
}



export default FeesItemDetail;
