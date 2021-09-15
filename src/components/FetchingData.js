import React, { useState, useEffect } from "react";
import axios from "axios";
import {getUser} from "../client/dashBoardClient"

function FetchingData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = () => {
      getUser()
      .then(res=>{
          setUsers(res.data.data)
      })
      .catch((error) => {
        // console.log(error);        
      });
    
  };
  // const ee=users.data.id;
  // console.log(ee)
//   console.log(users);
  return (
    <div>
      <h2>The User List is:-</h2>
      <ul>
        {users.map((usr) => {
          return <li key={usr.id}>{usr.name}</li>;
        })}
        {/* {users.map(userr=>{<li key={}})} */}
      </ul>
    </div>
  );
}

export default FetchingData;
