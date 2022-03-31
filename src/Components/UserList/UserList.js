import React from 'react'
import { Link } from 'react-router-dom'
import { CardUser } from '../CardUser/CardUser'
import './UserList.css'

export const UserList = (props) => {
    return (
      <div className='listCard'>
          {
            props.listUsers.map(user => {
                return (
                    <div key={user.id}>
                    <Link to={`/usersprofile/${user.id}`} className="links">
                        <CardUser userdetail = {user} />
                    </Link>
                    </div>
                )
            })
          }
      </div>
    )
  }

