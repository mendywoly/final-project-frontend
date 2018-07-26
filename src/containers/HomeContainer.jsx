import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

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
                            total sales today 100
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="ui segment">
                            total sales today 100
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default HomeContainer;
