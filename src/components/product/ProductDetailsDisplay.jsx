import React from 'react'

export default (props) => {    
    const {msku, fnsku,quantity_default_warehouse, asin, product_name, sellable_quantity, reserved_amz, units_shipped_last_30_days, in_bound_quantity, sales_rank, desired_days_of_stock, quantity_amz } = props.details    
    const fullStock = quantity_default_warehouse + quantity_amz + reserved_amz
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
                    <td>Default Warehouse</td>
                    <td>{quantity_default_warehouse}</td>
                </tr>
                <tr>
                    <td>Quantity Amz</td>
                    <td>{quantity_amz}</td>
                </tr>
                <tr>
                    <td>Reserved Amz</td>
                    <td>{reserved_amz}</td>
                </tr>
                <tr>
                    <td>Full Stock</td>
                    <td>{fullStock}</td>
                </tr>
                <tr>
                    <td>Sellable Quantity</td>
                    <td>{sellable_quantity}</td>
                </tr>
             
                <tr>
                    <td>In Bound Quantity</td>
                    <td>{in_bound_quantity}</td>
                </tr>
                <tr>
                    <td>Units Shipped Last 30 Days</td>
                    <td>{units_shipped_last_30_days}</td>
                </tr>
                <tr>
                    <td>Sales Rank</td>
                    <td>{sales_rank}</td>
                </tr>
                <tr>
                    <td>Desired Days Of Stock</td>
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
