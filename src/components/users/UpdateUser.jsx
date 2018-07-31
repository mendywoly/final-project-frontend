import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react'
import Adapter from '../Adapter'
import { Link } from 'react-router-dom'

class UpdateUser extends Component {

    state = {
        firstName: '', 
        lastName: '', 
        userName: '', 
        password: '',
    }

    componentDidMount = () => {
      this.fetchUserDetails()
    }

    fetchUserDetails = () => {
      Adapter.getUser(2).then( r => r.json() ).then(d => {
          this.setState({
            firstName: d.first_name, 
            lastName: d.last_name, 
            userName: d.username, 
            password: '',
          })
      })
    }
    

    
    handleChange = (e, {name, value}) => this.setState({ [name]: value})

    handleSubmit = (event) => {
        event.preventDefault();
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
                <Grid columns={3}  centered  >
                <Grid.Column>
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
            </div>
        );
    }
}

export default UpdateUser;
