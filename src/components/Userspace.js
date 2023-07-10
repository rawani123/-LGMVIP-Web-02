import React from 'react'
import Cards from './Cards'
// import Spinner from './Spinner'

export default function Userspace(props) {

    
  return (
    <div className='user_space'>
      {props.errorMessage && <div className="error">{props.errorMessage}</div>}
      
      {props.user.map(({id,email,first_name,last_name,avatar})=>{return(
      <Cards key={id} id={id} email={email} first={first_name} last={last_name} avatar={avatar}/>)})};
    </div>
  )
}
