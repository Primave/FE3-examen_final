import React, { useEffect, useState, useContext } from "react";
import "../index.css"
import { ContextGlobal } from '../Components/utils/global.context'
import { useParams } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {theme}= useContext(ContextGlobal)

  const [dentist, setDentist] = useState(null);
  const { id } = useParams();
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    const fetchDentist = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setDentist(data);
    }
    fetchDentist();
  }, [id]);

  return (
    <div className={ `${theme}`}>
      <h1>Detail Dentist id { `${id}`}</h1>
  
      {dentist ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
   
}

export default Detail