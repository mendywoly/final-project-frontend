import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import TopProductsList from '../components/home/TopProductsList'
import NeedsToBeShippedList from '../components/home/NeedsToBeShippedList'

class HomeContainer extends Component {
    render() {
        return (
            <Grid>
                   <Grid.Row>       
                        <Grid.Column>
                        </Grid.Column>
                    </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div className="ui segment">
                           <TopProductsList / >
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        < NeedsToBeShippedList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default HomeContainer;
