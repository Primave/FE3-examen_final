import React, { useEffect, useState, useContext } from "react";
import "../index.css"
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {theme}= useContext(ContextGlobal)

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [users, setUsers] = useState(favorites)
 
     useEffect(() => {
setUsers(favorites)
      }, []);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={` card-grid ${theme}`}>
        <div className="card-grid">
          {users.map((users) => (
            <Card
              key={users.id}
              id={users.id}
              name={users.name}
              username={users.username}
             
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;