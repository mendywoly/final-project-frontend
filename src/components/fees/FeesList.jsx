import React, { Component } from 'react';
import FeesItemDetail from './FeesItemDetail'

import {connect} from 'react-redux'

class FeesList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.fee_preview.map(e => <FeesItemDetail details={e}/>)}        
            </React.Fragment>
        );
    }
}

function mapStateToProps(state){  
    return {fee_preview: state.fee_preview}
}

export default connect(mapStateToProps)(FeesList);
