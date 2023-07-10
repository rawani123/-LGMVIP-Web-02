import React, { useState } from 'react'
import './components.css';
import Userspace from './Userspace';
import Spinner from './Spinner';


export default function NavBar() { 
  const [user,setUser]=useState([]);
  const [loading,setLoading]=useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const loadUser = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((respose) => respose.json())
      .then((respose) => {
         
         setTimeout(() => {
            setUser(respose.data);
            setLoading(false);
           }, 3000);
      })
      .catch(() => {
         setErrorMessage("Unable to fetch user list");
         setLoading(false);
      });
  };

  
  
  
  
  
  
  return (
    <div>
      <nav className='nav'><label className='mainlabel'>GodHackers</label>
      <label className='second'> To See The user of This website click on the button:</label>
      <button onClick={loadUser} disabled={loading}>Get USers</button>
      </nav> 
      {loading ? <Spinner /> :    
      <Userspace user={user} loading={loading} error={errorMessage}/>}
    </div>

  )
}
