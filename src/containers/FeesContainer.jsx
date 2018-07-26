import React, { Component } from 'react';
import Adapter from '../components/Adapter'
import Fee from '../components/Fee'
import 'semantic-ui-css/semantic.min.css';
import FeesTable from '../components/FeesTable'
import Test from '../components/Test'

class FeesContainer extends Component {

    state ={
        fees: []
    }

    componentDidMount = () => {
        Adapter.getFees().then(r => r.json()).then(d => {
            this.setState({ fees: d})
        })
    }

    
    
    
    render() {
        console.log(this.state.fees);
        
        return (
            <div>
                <br/> 
                < FeesTable fees={this.state.fees}/>
                <br/> 
                    {this.state.fees.map(f =>  <Test f={f} /> )}
                <br/>
                <Fee fees={this.state.fees}/>
            </div>
        );
    }
}

export default FeesContainer;
