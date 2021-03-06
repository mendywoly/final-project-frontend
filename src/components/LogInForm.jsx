import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Adapter from './Adapter'

class LogInForm extends Component {

    state = {
        userName: '', 
        password: '',
    }
    
    handleChange = (e, {name, value}) => this.setState({ [name]: value})

    handleSubmit = (event) => {
        event.preventDefault();
        const {userName, password  } = this.state

        Adapter.logIn( userName, password)
        .then(this.handleErrors)
        .then(d => {
            localStorage.setItem('token', d.token )
            this.props.history.push('/')
        })
        .catch(function(error) {
            alert("Wrong Username or Password")
        })
        
    }
    

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }

    render() {

        const { userName, password  } = this.state

        return (        
            <div>
                <Grid columns={3}  centered  >
               
                <Grid.Column>
                <br/>
                <br/>
                 <Link to="/signup">Signup</Link>
                 <br/>
                 <br/>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group  >
                                <Form.Input 
                                    label="Username" 
                                    placeholder='Username'
                                    name='userName' 
                                    onChange={this.handleChange}
                                    value={userName}
                                />
                                <Form.Input 
                                    label="Password" 
                                    placeholder='Password' 
                                    type='password' 
                                    name='password'
                                    onChange={this.handleChange}
                                    value={password}
                                />
                            </Form.Group>
                            <Form.Button content='Submit' />
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LogInForm;
