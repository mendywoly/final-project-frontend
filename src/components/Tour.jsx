import React, { Component } from 'react';

class Tour extends Component {
    state = {
        currentStep: 1,
    }

    componentDidMount = () => {
      this.takeAction()
    }
    

    takeAction = () => {
        console.log('Hit this')
      if (this.state.currentStep === 1){
          
          const a = document.getElementsByTagName('form')[0]
          console.log(a)
        //   const b = <div> Hellooooo</div>
        //   a.appendChild(b)
      }
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Tour;
