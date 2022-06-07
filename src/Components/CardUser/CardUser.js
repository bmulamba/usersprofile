import React from 'react'
import './CardUser.css'

export const CardUser = (props) => {
  // console.log(props.userdetail);
  return (
    <div className='card'>
        <img src={`https://robohash.org/${props.userdetail.id}/?set_set3/size=140x140`} alt={props.userdetail.id} />
        <p>{props.userdetail.name}</p>
        <p>{props.userdetail.email}</p>
    </div>
  )
}
