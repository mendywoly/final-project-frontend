import React, { Component } from 'react';
import Adapter from './Adapter'
import { Link } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'



class InvManagementDetail extends Component {
    state = {
        editMode: false
    }
    setStyle = () => {
      if (this.props.product.available_amz > 10 && this.props.product.available_amz > 0) {
          return <p style={{backgroundColor: "red"}}>{this.props.product.asin}</p>
      }
      else {
          return <p>{this.props.product.asin}</p>
      }
    }

    handleClick = () => {
        this.state.editMode ? this.setState({editMode: false}) : this.setState({editMode: true})
    }
    
    handleRemove = () => {
        // Adapter.editProduct(this.state.details.id)
        Adapter.addSkuToManageInv(this.props.product.id).then(r=> r.json())
        .then(() => {
            this.props.fetchSkus()
            this.setState({editMode: false})
        })
    }


    
    render() {
        
        const {editMode} = this.state
        const {asin, quantity_amz, reserved_amz, prep_instructions, lead_time, units_shipped_last_30_days, sellable_quantity, in_bound_quantity, product_name } = this.props.product

        const fullStock = sellable_quantity + reserved_amz + in_bound_quantity
        const days_until_empty = Math.floor(fullStock / (units_shipped_last_30_days / 30))
        const needsToBeShipped = days_until_empty < lead_time


        const show = <React.Fragment>
                        <table className="ui celled table">
                            <thead>
                                    <tr>
                                        <th>asin</th>
                                        <th>quantity_amz</th>
                                        <th>reserved</th>
                                    </tr>
                                </thead>
                            <tbody>
                            <tr>
                                <td>{asin}</td>
                                <td>{quantity_amz}</td>
                                <td>{reserved_amz}</td>
                            </tr>
                            </tbody>
                        </table>
                    </React.Fragment>   

         const show2 = <React.Fragment>
                        <h5>{product_name}</h5>
                        <p>{prep_instructions}</p>
                        <p>DaysUntil Empty: {days_until_empty}</p>
                    </React.Fragment>   

       
        const edit = <React.Fragment>
                <p>{prep_instructions}</p>
                        <table className="ui celled table">
                            <thead>
                                    <tr>
                                        <th>asin</th>
                                        <th>quantity_amz</th>
                                        <th>Header</th>
                                    </tr>
                                </thead>
                            <tbody>
                            <tr>
                                <td>{asin}</td>
                                <td>{quantity_amz}</td>
                                <td className="ui input"><input className="ui input focus" type="text"/></td>
                            </tr>
                            </tbody>
                        </table>
                        <button onClick={this.handleRemove}>
                            {this.props.product.on_inv_management ? 'Remove' : 'Add'}
                         </button>
                     </React.Fragment>

        return ( <React.Fragment>
            {needsToBeShipped ?
             <Segment style={{width: '80%', margin: 'auto'}} color="red" >
             <Link to={`/products/` + this.props.product.id}>Go To ProductPage</Link>
 
                 <button 
                     onClick={this.handleClick} 
                     className="ui right floated button"
                 >
                 {this.state.editMode ? 'Save' : 'Edit'}
                 </button>
                  {editMode ? edit : show2}
             </Segment>
                
            : 
            <Segment style={{width: '80%', margin: 'auto'}}  >
            <Link to={`/products/` + this.props.product.id}>Go To ProductPage</Link>

                <button 
                    onClick={this.handleClick} 
                    className="ui right floated button"
                >
                {this.state.editMode ? 'Save' : 'Edit'}
                </button>
                 {editMode ? edit : show2}
            </Segment> 
            }
            
            
            </React.Fragment>
        );
    }
}

export default InvManagementDetail;
