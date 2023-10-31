import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();
  const { theme } = state;
  const favorites = JSON.parse(localStorage.getItem("favs"));

  return (
    <div className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((fav, index) => (
          <Card
            key={index}
            name={fav.name}
            username={fav.username}
            id={fav.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
