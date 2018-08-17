import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

export default class ProgressBar extends Component {

  state = { percent: 0 }

    componentDidMount = () => {
        this.interval = setInterval(this.increment, 650);
    }

    increment = () => {
        this.setState({
        percent: this.state.percent >= 100 ?  this.test() : this.state.percent + 20,
        })
    }
    
    test = () => {
        clearInterval(this.interval)
        this.setState({ percent: 100})
    }
    



    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    
 

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} indicating />
      </div>
    )
  }
}