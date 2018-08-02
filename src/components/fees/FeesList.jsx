import React, { Component } from 'react';
// import FeesItemDetail from './FeesItemDetail'
import FeesItemDetail2 from './FeesItemDetail2'
import { Grid, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux'


class FeesList extends Component {

    state = {
        mode: 'Refferal Fee',
        minimumFee: false,
        percentageView: 'all',
    }

    filterFeesPreview =() => {
        const minimumFeeFiltered =  this.state.minimumFee ?  this.props.fee_preview.filter( e => e.estimated_referral_fee_per_unit !== '1.00'  ) : this.props.fee_preview
        return this.state.percentageView !== 'all' ? minimumFeeFiltered.filter( element => parseInt(this.state.percentageView) === Math.floor(parseFloat(element.estimated_referral_fee_per_unit) / parseFloat(element.sales_price) * 100 )) : minimumFeeFiltered
    }

    sortedFeesPreview = (params) => {
        return this.filterFeesPreview().sort( (b, a) => a.product.units_shipped_last_90_days -b.product.units_shipped_last_90_days )
    }

    handleMode = () => {
        this.state.mode === 'sizing' ? this.setState({mode: 'not-sizing'}) : this.setState({mode: 'sizing'})
    }
    handleMinimumFee = () => {
        this.state.minimumFee ? this.setState({minimumFee: false}) : this.setState({minimumFee: true})
    }
    handlePercentageView = (event) => {
        this.setState({percentageView: event.target.value})
    }
    

    getOptions = () => {
      const percentageOptions = ['all']
      const minimumFeeFiltered =  this.state.minimumFee ?  this.props.fee_preview.filter( e => e.estimated_referral_fee_per_unit !== '1.00'  ): this.props.fee_preview
      minimumFeeFiltered.forEach(element => {
        const percentage = Math.floor( parseFloat(element.estimated_referral_fee_per_unit) / parseFloat(element.sales_price) * 100 )
            percentageOptions.includes(percentage) ? null : percentageOptions.push(percentage)
      });
      return percentageOptions.sort((a,b) => a -b)
    }
    
    
    
    

      
    render() {
        return (
            <React.Fragment>
                 <Grid>
                    <Grid.Row columns={1}>                        
                        <Grid.Column>
                            <label>{this.state.mode} <input type="checkbox" onClick={this.handleMode}/></label>
                            <label>exclude 1$ fees? <input type="checkbox" onClick={this.handleMinimumFee}/></label>
                            <label>Percentage: <select onChange={this.handlePercentageView}>{this.getOptions().map(e => <option key={e} value={e}>{e}</option>)}</select></label>                            
                            <p>{this.sortedFeesPreview().length}</p>
                        </Grid.Column>
                    </Grid.Row> 

                    <Grid.Row columns={1}>
                        <Grid.Column>
                            {this.sortedFeesPreview().map(e => <FeesItemDetail2 key={e.id} details={e} mode={this.state.mode}/>)}          
                        </Grid.Column>            
                        <Grid.Column>
                            <Segment> 
                                Column 2
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment> 
                                Column 3
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>

                {/* {this.sortedFeesPreview().map(e => <FeesItemDetail key={e.id} details={e}/>)} */}
                
            </React.Fragment>            
        );
    }
}

function mapStateToProps(state){  
    return {fee_preview: state.fee_preview}
}

export default connect(mapStateToProps)(FeesList);
