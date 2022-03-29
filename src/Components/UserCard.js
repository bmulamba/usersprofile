import React from 'react'
import "./../App.css"

export default function UserCard(props) {
    // console.log(props.userId);
  return (
  
    <div className='container-card'>
        <div className='card-image'>
            <img src={`https://robohash.org/${props.userId}/?set_set3/size=140x140`} alt={props.id} />
        </div>
        <div className='card-body'>
            <span>{props.name}</span><br/>
            <span>{props.email}</span>
        </div>
    </div>

  )
}
