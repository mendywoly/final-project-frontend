import React, { Component } from 'react';

class TopProductsListDetails extends Component {
    render() {
        const {product_name} = this.props.details
        return (
            <React.Fragment>
                <tr>
                    <td>
                        {product_name}
                    </td>
                    <td>{this.props.quantity}</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default TopProductsListDetails;
