import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardUser } from "../CardUser/CardUser";
import "./UserList.css";

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
       first : ""
    }
  }
  getSingleUser = (id) => {
    let users = this.props.listUsers;
    
    let user = users.filter(u => u.id = id)
    // console.log(user[0]);
  }
  render(){
    return (
      <>
    <div className="listCard">
      {this.props.listUsers.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`/usersprofile/${user.id}`} onClick={() => this.getSingleUser(user.id)} className="links">
              <CardUser userdetail={user} />
            </Link>
          </div>
        );
      })}
    </div>
    </>
  );
}}
