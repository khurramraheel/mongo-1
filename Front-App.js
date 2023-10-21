// import {BrowserRouter, Route, Route} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default ()=>{

  let [users, setUsers]= useState([])

  useEffect(()=>{

axios.get('/user-lao').then((resp)=>{

  setUsers(resp.data)

    })

  }, [])

  const adduser =  ()=>{

    let name = prompt("ente rname");
    let city = prompt("ente city");

    axios.post('/create-user', {name, city}).then(()=>{
      
      setUsers([...users, {name, city}]);

    })


  }

  const updateUser = (id)=>{

    let name = prompt("Enter new name");

    axios.put('/user-update', {
      id,
      name
    }).then(()=>{

      let user = users.find(user=>user._id == id);
      user.name = name;
      setUsers([...users]);


    })

  }

  const deleteUser = (id)=>{

    axios.delete('/user-delete?some='+id)

  }

  return <div>

    <button onClick={adduser}>Add user</button>

    <table>
      {
        users.map((user)=>{
          return <tr>
            <td>{user.name}</td>
            <td>{user.city}</td>
            <td>
              <button onClick={()=>deleteUser(user._id)}>Delete</button>
            </td>
            <td>
              <button onClick={()=>updateUser(user._id)}>Update</button>
            </td>
            </tr>
        })
      }
    </table>

  </div>


}