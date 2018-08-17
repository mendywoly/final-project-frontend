import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import Adapter from './Adapter'
import { Link } from 'react-router-dom'


class MainMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => {
        if (name === 'logout') {
            Adapter.logout()
            this.props.history.push('/login')
        }
        if (name === 'fees') {
            this.props.history.push('/fees')
        }
        if (name === 'invmanagement') {
            this.props.history.push('/invmanagement')
        }
        if (name === 'reports') {
            this.props.history.push('/reports')
        }
        if (name === 'products') {
            this.props.history.push('/products')
        }
        if (name === 'home') {
            this.props.history.push('/')
        }
        if (name === 'profile') {
            this.props.history.push('/profile')
        }
        if (name === 'destructivelyLogout') {
            Adapter.destructivelyLogout()
            localStorage.removeItem('token');
            this.props.history.push('/signup')
        }


    }

    

    render() {
        const { activeItem } = this.state
        return (
            <div>                    
                <Menu>
                <Link className="item" to="/">Home</Link>

                    {/* <Menu.Item                                               
                        name='home'
                        active={activeItem === 'home'}
                        onClick={<Redirect to="/"/>}
                        >
                        Home                        
                    </Menu.Item> */}

                    
                    <Menu.Item
                        name='products'
                        active={activeItem === 'products'}
                        onClick={this.handleItemClick}
                        >
                        Products
                    </Menu.Item>
                    
                    <Menu.Item
                        name='reports'
                        active={activeItem === 'reports'}
                        onClick={this.handleItemClick}
                        >
                        Reports
                    </Menu.Item>

                    {/* <Menu.Item
                        name='fees'
                        active={activeItem === 'fees'}
                        onClick={this.handleItemClick}
                        >
                        Fees
                    </Menu.Item> */}

                    {/* <Menu.Item
                        name='returns'
                        active={activeItem === 'returns'}
                        onClick={this.handleItemClick}
                        >
                        Returns
                    </Menu.Item> */}

                     <Menu.Item
                        name='invmanagement'
                        active={activeItem === 'invmanagement'}
                        onClick={this.handleItemClick}
                        >
                        Inventory Management
                    </Menu.Item>

                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                        >
                        Logout
                    </Menu.Item>

                     {/* <Menu.Item
                        name='destructivelyLogout'
                        active={activeItem === 'destructivelyLogout'}
                        onClick={this.handleItemClick}
                        >
                        Destructively Logout
                    </Menu.Item> */}

                    {/* <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                        >
                        Profile
                    </Menu.Item> */}

                </Menu>
            </div>
        );
    }
}

export default MainMenu;
