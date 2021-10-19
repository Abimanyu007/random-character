import React from 'react'

class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked:0,
            totalRemaining:10
        }

    }

    ClickMe(){
            this.setState({clicked:this.state.clicked+1,
            totalRemaining:this.state.totalRemaining-1})

    }

    render() {
      return (
          <div>
        <h1 onClick={() => this.ClickMe()}>Hello, I'm a  {this.props.name}</h1>
      
      <span>
          <p>{this.state.clicked} is the no of times i clicked {this.props.name} , Remaining {this.state.totalRemaining}</p>
      </span>
</div>
      )
    }
  
  }


  export default Item;