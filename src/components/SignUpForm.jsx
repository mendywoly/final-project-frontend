import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react'
import Adapter from './Adapter'
import { Link } from 'react-router-dom'
import Progress from '../components/Progress'

class SignUpForm extends Component {

    state = {
        firstName: '', 
        lastName: '', 
        userName: '', 
        password: '',
        submitted: false
    }
    
    handleChange = (e, {name, value}) => this.setState({ [name]: value})

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({submitted: true })
        const {firstName, lastName, userName, password  } = this.state

        Adapter.signUp(firstName, lastName, userName, password)
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

        const {firstName, lastName, userName, password  } = this.state

        return (        
            <div>
                
                {this.state.submitted ? 
                <React.Fragment>
                <Progress />
                <h4>Fetching your products from api</h4>
                </React.Fragment>
                 : 
                <Grid columns={3}  centered  >
                <Grid.Column centered>
                    <br/>
                    <br/>
                <h1 style={{textAlign: 'center'}}>Rapid Suite Inventory Management</h1>
                <br/><br/>
                <Link to="/login">Login</Link>
                <br/><br/>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group  >
                                <Form.Input 
                                    label="First Name" 
                                    placeholder='First Name'
                                    name='firstName'
                                    onChange={this.handleChange}
                                    value={firstName}
                                />
                                <Form.Input 
                                    label="Last Name" 
                                    placeholder='Last Name' 
                                    name='lastName'
                                    onChange={this.handleChange}
                                    value={lastName}
                                />
                            </Form.Group>
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
                    }
            </div>
        );
    }
}

export default SignUpForm;
