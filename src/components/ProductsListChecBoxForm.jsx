import React, { Component } from 'react';
import Adapter from './Adapter'

class ProductsListChecBoxForm extends Component {

    handleChange = (event) => {
        const checkedProductObjects = this.props.products.filter( e =>   this.props.checked.includes(e.id) )
        const choice = event.target.value
        console.log(choice === '1')
      if (choice === '1') {
            checkedProductObjects.forEach(element => {
            Adapter.editProduct(element.id, {...element, on_inv_management: true} )
        });
      }
      else if (choice === '2') {
        checkedProductObjects.forEach(element => {
            Adapter.editProduct(element.id, {...element, lead_time: 14,  on_inv_management: true} )
        });
      }
    }
    

    render() {

        // const checkedProductObjects = this.props.products.filter( e =>   this.props.checked.includes(e.id) )
        // console.log(this.props)
        return (
            <React.Fragment>
                <select className="ui dropdown" onChange={this.handleChange}>
                    <option value="">Actions</option>
                    <option value="1">Add the Inv Management</option>
                    <option value="2">Set Lead time to 14</option>
                </select>
            </React.Fragment>
        );
    }
}

export default ProductsListChecBoxForm;
