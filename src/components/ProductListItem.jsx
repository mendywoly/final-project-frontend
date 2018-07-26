import React, { Component } from 'react';
import {Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class ProductListItem extends Component {

    // componentDidUpdate = (prevProps, prevState) => {
    //   console.log('prevProps', prevProps);
    //   console.log('this props', this.props);
    //   if (prevProps.checked !== this.props.checked) {
    //     (e) => this.props.checkedHandler(e, this.props.details.id)  
    //     return true
    //   } else { return false}
    // }
    
    render() {                
        const {asin, msku, fnsku, id } = this.props.details               
        return (
            <React.Fragment>
                <tr >
                    <td className="collapsing">
                        <Checkbox
                            checked={!!this.props.checked.find(e => e === id)}
                            onClick={ (event) => this.props.checkedHandler(event, this.props.details.id)  }
                        />
                    </td>
                    <td>{asin}</td>
                    <td>{fnsku}</td>
                    <td>{msku}</td>
                    <td><Link to={`/products/` + this.props.details.id}>Click</Link></td>
                </tr>
            </React.Fragment>
        );
    }
}

export default ProductListItem;
