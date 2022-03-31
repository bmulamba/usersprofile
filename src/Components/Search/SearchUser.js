import React from 'react'
import './SearchUser.css'

export const SearchUser = (props) => {
  return (
    <div>
        <form>
            <input className='form-user' placeholder='Search User' onChange={props.searchChange} />
        </form>
    </div>
  )
}
