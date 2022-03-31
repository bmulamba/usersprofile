import React from 'react'
import { Link } from 'react-router-dom'

export const UserDetail = (props) => {
  // var userId = props.match.params.id
  return (
    <div>
    <div>UserDetail</div>
    <button>
      <Link to={'/usersprofile/'}>
        Home
      </Link>
    </button>

    {/* <div> {userId} </div> */}
    </div>
  )
}
