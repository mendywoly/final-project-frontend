import React, { Component } from 'react';
import { Button, Input, Form, Segment, Checkbox } from 'semantic-ui-react'
import Adapter from '../Adapter'

class ProductEditForm extends Component {
    constructor(props) {
        super(props);        
        this.state = {details: {...props.details}, saved: true}
    }
  
    

    handleClick = () => {
      Adapter.addSkuToManageInv(this.props.details.id, {on_inv_management: true}).then(r=> r.json()).then(console.log)
    }

    handleChange = (event) => {
      this.setState({ details: {...this.state.details, [event.target.name]: event.target.value }, saved: false })
    }
    
    handleSubmit = (event) => {
      event.preventDefault()
      Adapter.editProduct(this.state.details.id, this.state.details).then(r=> {
          if (r.ok) {
              this.setState({saved: true})
              return r.json()
          } else { alert("Something went worng please try again")}
      }).then(this.props.initalFetch)
    }
 

    

    
    render() {       
        const { quantity_default_warehouse, lead_time, desired_days_of_stock, on_inv_management, prep_instructions } = this.state.details
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
                        onChange={(e,d) => this.setState({ details: {...this.state.details, on_inv_management: d.checked}, saved: false  })}
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
                        <textarea 
                        label='Prep Instructions' 
                        name="prep_instructions"
                        cols="30" 
                        rows="10" 
                        value={prep_instructions}
                        onChange={this.handleChange}
                        ></textarea>
                        <br/>
                        <br/>
                        <br/>
                        {this.state.saved ? <Button disabled>Changed Saved</Button> : <Button color='green' type='submit'>Save</Button>}
                      
                    </Form>
            </Segment>
        );
    }
}

export default ProductEditForm;
