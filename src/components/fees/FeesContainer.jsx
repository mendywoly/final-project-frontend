import React, { Component } from 'react';
import Adapter from '../Adapter'
import {connect} from 'react-redux'
import FeesList from './FeesList'

class FeesContainer extends Component {

    componentDidMount = () => {
      Adapter.getCurrentUserFeesPreview().then( r => r.json() )
      .then(d => this.props.addfeePreviewData(d) )
    }
    
    render() {
        return (
            <div style={{ margin: '10px' }}>
                {!!this.props.fee_preview ? <FeesList /> : null}
            </div>
            // <div>            
            //     <br/>
            //         <table className="ui celled table">
            //             <thead>
            //                 <tr>
            //                     <th>Msku</th>
            //                     <th>Fnsku</th>
            //                     <th>Asin</th>
            //                     <th width={1} >product_name</th>
            //                     <th>product_group</th>
            //                     <th>product_size_tier</th>
            //                     <th>fee total</th>
            //                     <th>variable closing fee</th>
            //                     {/* <th>order handling fee per order</th>
            //                     <th>pick pack fee per unit</th>
            //                     <th>weight handling fee per unit</th> */}
            //                     <th>fulfillment fee per unit</th>
            //                     <th>Sales Price</th>
            //                     <th>referral fee per unit</th>                            
            //                     <th>Percentage</th>
            //                     <th>Amount Shipped 90</th>
            //                 </tr>
            //             </thead>
            //             <tbody>
            //                 {!!this.props.fee_preview ? <FeesList /> : null}
            //             </tbody>
            //         </table>               
            // </div>
        );
    }
}


function mapStateToProps(state){  
    return {fee_preview: state.fee_preview}
  }
  
  
  function mapDispatchToProps(dispatch){
    return {
    addfeePreviewData: (feePreviewData) => {
        dispatch({ type: 'ADD_FEE_PREVIEW',  payload: feePreviewData })
      }, 
    }
  }

  

export default connect(mapStateToProps, mapDispatchToProps)(FeesContainer);
