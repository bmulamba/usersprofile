import React from 'react'
import './SearchUser.css'

export const SearchUser = (props) => {
  return (
    <div>
        <form>
            <input className='form-user-input' placeholder='Search User' onChange={props.searchChange} />
        </form>
    </div>
  )
}
