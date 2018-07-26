import React from 'react'

export default (props) => {    
    const {msku, fnsku, asin, product_name, sellable_quantity, reserved_amz, units_shipped_last_30_days, in_bound_quantity, sales_rank, desired_days_of_stock } = props.details    
    const fullStock = sellable_quantity + reserved_amz + in_bound_quantity
  return (
    <div className="ui segment">
       <h3>{product_name}</h3>
        <table className="ui celled table" >
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Asin</td>
                    <td>{asin}</td>
                </tr>
                <tr>
                    <td>fnsku</td>
                    <td>{fnsku}</td>
                </tr>
                <tr>
                    <td>Msku</td>
                    <td>{msku}</td>
                </tr>
                <tr>
                    <td>sellable_quantity</td>
                    <td>{sellable_quantity}</td>
                </tr>
                <tr>
                    <td>reserved_amz</td>
                    <td>{reserved_amz}</td>
                </tr>
                <tr>
                    <td>in_bound_quantity</td>
                    <td>{in_bound_quantity}</td>
                </tr>
                <tr>
                    <td>units_shipped_last_30_days</td>
                    <td>{units_shipped_last_30_days}</td>
                </tr>
                <tr>
                    <td>sales_rank</td>
                    <td>{sales_rank}</td>
                </tr>
                <tr>
                    <td>desired_days_of_stock</td>
                    <td>{desired_days_of_stock}</td>
                </tr>
                <tr>
                    <td>Full Stock</td>
                    <td>{fullStock}</td>
                </tr>
                <tr>
                    <td>Days Until Empty</td>
                    <td>{Math.floor(fullStock / (units_shipped_last_30_days / 30))}</td>
                </tr>
                <tr>
                    <td>Units to ship </td>
                    <td>{desired_days_of_stock  *  (units_shipped_last_30_days / 30)}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
  )
}
