import React, { Component } from 'react'

export default class UserDetail extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user : []
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(res => res.json())
    .then(user => this.setState({user : user}))
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        <h1>name</h1>
      </div>
    ) 
  }
}
