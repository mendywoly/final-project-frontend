import React, { Component } from 'react';
import Adapter from './Adapter'
import ProductListItem from './ProductListItem'
import {Checkbox, Modal, Button } from 'semantic-ui-react'


class ProductsList extends Component {
    state = {
        skus: [],
        asin: '',
        fnsku: '',
        msku: '',
        product_name: '',
        checked: [],
        allSelected: false
    }

    componentDidMount = () => {
        this.fetchSkus()
    }

    // Fetch all skus, Want to change backend to only render the just skus and not details to improve preformance. 
    fetchSkus = () => {
        Adapter.getAllSkus().then(r => r.json()).then(d => {
            const sortedData = d.sort( (a, b) => a.value - b.value)
            this.setState({ skus: sortedData })
        })
    }

    // Handles Navigation to product detail page. Based on click from product list page 
    // handleClick = (id) => {
    //   this.props.history.push('/products/' + id)
    // }

    // Function to handle all controlled forms
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }

    // Filters through 4 different ways od identifying a product
    filterProducts = () => {
        return this.state.skus.filter(p => p.asin.toLowerCase().includes(this.state.asin.toLowerCase()) && p.fnsku.toLowerCase().includes(this.state.fnsku.toLowerCase()) && p.msku.toLowerCase().includes(this.state.msku.toLowerCase())  && p.product_name.toLowerCase().includes(this.state.product_name.toLowerCase()) )
      }


    //   Allow user to search by multiple skus, based on line break, Come back to this later 
    // splitString = () => {
    //   const newArr = []
    //     this.state.asin.split('\n').forEach(sku => {
    //         newArr.push(this.state.skus.filter( e => e.asin.includes(sku) ))
    //     });
    //     return newArr 
    // }
    
    //   Adds id to array if not checked, and if checked removes it 
    checkedHandler = (event, id) => {
        if (!!this.state.checked.find( e => e === id )) {
            const newArr = [...this.state.checked].filter( e => e !== id)
            this.setState({checked: newArr})
        } else {
            const newArr = [...this.state.checked, id]
            this.setState({checked: newArr})
        }
    }

    // Checks all at first, and on second click will reset checked array
    handleCheckedAll = () => {        
        if (this.state.allSelected) {
            this.setState({ checked: [], allSelected: false })
        } else {
            const allIds = this.filterProducts().map(e => e.id)
            this.setState({
                checked: allIds,
                allSelected: true
             })
        }
    }
    
    
    
    
    
    render() {                
        return (
            <div>
                <br/>
                <input 
                        type="text"
                        placeholder="Search By Name"
                        name="product_name"
                        value={this.state.name}
                        onChange={this.handleChange}
                     />
                    <input 
                        type="text"
                        placeholder="Search By Asin"
                        name="asin"
                        value={this.state.asin}
                        onChange={this.handleChange}
                     />
                    <input 
                        type="text"
                        placeholder="Search By Fnsku"
                        name="fnsku"
                        value={this.state.fnsku}
                        onChange={this.handleChange}
                    />
                     <input 
                        type="text"
                        placeholder="Search By Msku"
                        name="msku"
                        value={this.state.msku}
                        onChange={this.handleChange}
                    />

                    <table  className="ui celled table">
                    <thead>
                        <tr>
                            <th>
                                <Checkbox 
                                onClick={this.handleCheckedAll}
                                />
                            </th>
                            <th>Asin</th>
                            <th>Fsnku</th>
                            <th>Sku</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.filterProducts().map(row => {
                            return <ProductListItem 
                                key={row.id} 
                                details={row} 
                                handleClick={() => this.handleClick(row.id)} 
                                checked={this.state.checked}
                                checkedHandler={this.checkedHandler}
                            />
                        } )}
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ProductsList;
