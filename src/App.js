import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SearchUser } from "./Components/Search/SearchUser"
import "./App.css";

const UserList = lazy(() => import('./Components/UserList/UserList'));
const UserDetail = lazy(() => import('./Components/UserDetail/UserDetail'));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user : [],
      searchbox: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchbox: e.target.value,
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((person) => this.setState({ users: person }));
  }

  render() {
    const searchUser = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchbox.toLowerCase())
    );

    return (
      <div className="app">
        <div className="header">
          <h1>USERS PROFILS</h1>
        </div>

        <SearchUser searchChange={this.handleChange} />

        
        <Routes>
          <Route
            path="/usersprofile"
            element={< Suspense fallback={<h1> Loadng ...</h1>}> <UserList listUsers={searchUser} /> </Suspense>}
          />
          <Route 
            path="/usersprofile/:id" 
            element={< Suspense fallback={<h1> Loadng ...</h1>}> <UserDetail /> </Suspense>} />
        </Routes>
      </div>
    );
  }
}
