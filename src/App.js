import React, { Component } from 'react'
import {UserList} from './Components/UserList/UserList';
import { SearchUser } from './Components/Search/SearchUser';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { UserDetail } from './Components/UserDetail/UserDetail';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users : [],
      searchbox : ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchbox : e.target.value
    })
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(person => this.setState({users : person}));
  }
  render() {
    // console.log(this.state.searchbox);

    const searchUser = this.state.users.filter(user => (
      user.name.toLowerCase().includes(this.state.searchbox.toLowerCase())
    )
      
    )
    return (
      <div className='app'>
        <SearchUser searchChange = {this.handleChange}/>
        <Routes>
          <Route path='/' exact element = {<UserList listUsers = {searchUser}/>}/>
          <Route path='/:id' element = {<UserDetail/> } /> 
        </Routes>
      </div>
    )
  }
}
