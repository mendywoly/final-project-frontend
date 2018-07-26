import React, { Component } from 'react';
import { Button, Input, Form, Segment, Checkbox } from 'semantic-ui-react'
import Adapter from '../Adapter'

class ProductEditForm extends Component {
    constructor(props) {
        super(props);        
        this.state = {...props.details}
    }
  
    

    handleClick = () => {
      Adapter.addSkuToManageInv(this.props.details.id, {on_inv_management: true}).then(r=> r.json()).then(console.log)
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }
    
    handleSubmit = (event) => {
      event.preventDefault()
      Adapter.editProduct(this.state.id, this.state).then(r=>r.json()).then(this.props.initalFetch)
    }
 
    

    
    render() {       
        const { quantity_default_warehouse, lead_time, desired_days_of_stock, on_inv_management } = this.state
        return (
            <Segment>
                 <h3>Edit Product</h3>
                 <br/>
                 <br/>
                    <Form onSubmit={this.handleSubmit}>
                        <Checkbox 
                        slider
                        label={on_inv_management ? "Remove" : "Add"}
                        defaultChecked={on_inv_management ? true : false }
                        name="on_inv_management"
                        onChange={(e,d) => this.setState({ on_inv_management: d.checked })}
                         />
                        <br/>
                        <br/>
                        <Input 
                            label='Default Quantity' 
                            type="number" 
                            value={quantity_default_warehouse}
                            name="quantity_default_warehouse"
                            onChange={this.handleChange}
                        />
                            <br/>                               
                            <br/>
                        <Input 
                        label='Lead Time' 
                        type="number"
                        value={lead_time}
                        name="lead_time"
                        onChange={this.handleChange}
                        />
                            <br/>                               
                            <br/>
                        <Input 
                        label='Desired Days of Stock' 
                        type="number"
                        value={desired_days_of_stock}
                        name="desired_days_of_stock"
                        onChange={this.handleChange}
                        />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Button type='submit'>Submit</Button>
                    </Form>
            </Segment>
        );
    }
}

export default ProductEditForm;
