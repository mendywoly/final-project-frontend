import React, { Component } from 'react';
import Adapter from '../Adapter'
import TopProductsListDetails from './TopProductsListDetails'
class TopProdcutsList extends Component {


    state = {topProducts: [], range: 'units_shipped_last_24_hrs'}

    componentDidMount = () => {
        this.fetchTopProducts(24)
    }

    fetchTopProducts = (rangeNumber) => {
        Adapter.getTopProducts(rangeNumber).then(r => r.json()).then(d => this.setState({topProducts: d  }))
    }

    handleChange = (event) => {
        // const range = parseInt(event.target.value)
        this.setState({range: event.target.value})
        this.fetchTopProducts(event.target.value)
    }
    
    
    
    render() {
        return (
            <div>
                <h3>Top Products</h3>
                <select name="something here" onChange={this.handleChange}>
                    <option value="units_shipped_last_24_hrs">Last 24 Hours</option>
                    <option value="units_shipped_last_7_days">Last 7 Days</option>
                    <option value="units_shipped_last_30_days">Last 30 Days</option>
                    <option value="units_shipped_last_90_days">Last 90 Days</option>
                    <option value="units_shipped_last_180_days">Last 180 Days</option>
                    <option value="units_shipped_last_365_days">Last 365 Days</option>
                </select>
                <table className="ui celled table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.topProducts.map(e => <TopProductsListDetails key={e.id} details={e} quantity={ e[`${this.state.range}`] } / >)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TopProdcutsList;
<ul>

</ul>