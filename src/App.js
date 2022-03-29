import React, { Component } from 'react'
import './App.css'
import UserCard from './Components/UserCard';
import SearchUser from './Components/SearchUser';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users : []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(person => this.setState({users : person}));
  }
  render() {
    // console.log(this.state.users);
    return (
      <div className='app'>
           <SearchUser />
        <div className='container'>
          {
            
            this.state.users.map(user => {
              return(
                <div key = {user.id} >
                  <UserCard 
                    userId = {user.id}
                    name = {user.name}
                    email = {user.email}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
