import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class Fee extends Component {

    getItems = () => {
        const arrOfObjs = []
        this.props.fees.forEach(element => {
            arrOfObjs.push({ header: element.sku, meta: element.fnsku, description: element.fnsku,})
        });
        return arrOfObjs
    }

    render() {
        return (
            <div>
                <div style={{width: '50%', margin: 'auto'}}>
                    <Card.Group 
                    centered
                    itemsPerRow={1}
                    items={this.getItems()} 
                    />
                </div>              
            </div>
        );
    }
}

export default Fee;
