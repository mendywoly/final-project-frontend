import React, { Component } from 'react';
import Adapter from '../components/Adapter'
import { Grid } from 'semantic-ui-react'
import ProductDetailsDisplay from '../components/product/ProductDetailsDisplay'
import ProductEditForm from '../components/product/ProductEditForm'

import ProductChart from '../components/product/PoductChart'

class Product extends Component {

    state = {
        details: [],
        leadTime: '',
        daysOfStock: '',
        prep: '',
    }
     
    componentDidMount() {
        this.initalFetch()
    }

    initalFetch = () => {        
        Adapter.getSku(this.props.match.params.id).then(r => r.json()).then(d => this.setState({details: d}))
    }
    
    handleClick = () => {
        Adapter.addSkuToManageInv(this.state.details.id).then(r=> r.json())
        .then( this.initalFetch)
    }

    handleSubmit = (event) => {
      event.preventDefault()
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value  })
    }
    
    
    render() {        
        return (
            <React.Fragment>
            {this.state.details.id !== undefined ?
            <Grid >
                <Grid.Row>
                    <Grid.Column >
                    </Grid.Column >
                </Grid.Row>
                <Grid.Row columns={2} >
                    <Grid.Column >
                            <ProductDetailsDisplay details={this.state.details} />
                    </Grid.Column>
                    <Grid.Column stretched>
                     <ProductEditForm details={this.state.details} initalFetch={this.initalFetch}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2} >
                    <Grid.Column >
                        <ProductChart  details={this.state.details} />
                    </Grid.Column >
                </Grid.Row>
            </Grid>
            : null }
            </React.Fragment>
        );
    }
}

export default Product;
