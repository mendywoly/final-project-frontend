import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react'
import Adapter from '../Adapter'
import { Link } from 'react-router-dom'

class UpdateUser extends Component {

    state = {
        first_name: '', 
        last_name: '', 
        username: '', 
        password: '',
    }

    componentDidMount = () => {
      this.fetchUserDetails()
    }

    fetchUserDetails = () => {
      Adapter.getCurrentUser().then( r => r.json() ).then(d => {
          this.setState({
            first_name: d.first_name, 
            last_name: d.last_name, 
            username: d.username, 
            password: '',
          })
      })
    }
    

    
    handleChange = (e, {name, value}) => this.setState({ [name]: value})

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const {first_name, last_name, username, password  } = this.state

    //     Adapter.signUp(first_name, last_name, username, password)
    //     .then(this.handleErrors)
    //     .then(d => {
    //         localStorage.setItem('token', d.token )
    //         this.props.history.push('/')
    //     })
    //     .catch(function(error) {
    //         alert("Wrong username or Password")
    //     })
        
    // }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }

    handleSubmit = (event) => {
      event.preventDefault()
      Adapter.updateUser(this.state, 1).then( r => r.json() ).then(console.log)
    }
    
    

    render() {

        const {first_name, last_name, username, password  } = this.state

        return (        
            <div>
                <Grid columns={3}  centered  >
                <Grid.Column>
                        <Form onSubmit={this.handleSubmit} >
                            <Form.Group  >
                                <Form.Input 
                                    label="First Name" 
                                    placeholder='First Name'
                                    name='first_name'
                                    onChange={this.handleChange}
                                    value={first_name}
                                />
                                <Form.Input 
                                    label="Last Name" 
                                    placeholder='Last Name' 
                                    name='last_name'
                                    onChange={this.handleChange}
                                    value={last_name}
                                />
                            </Form.Group>
                            <Form.Group  >
                                <Form.Input 
                                    label="username" 
                                    placeholder='username'
                                    name='username' 
                                    onChange={this.handleChange}
                                    value={username}
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
