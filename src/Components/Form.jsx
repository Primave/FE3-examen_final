import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [mensaje, setMensaje] = useState(null);
  
  function handleSubmit(event) {
    event.preventDefault();

    const nombre = event.target.nombre.value.trim();
    const email = event.target.email.value.trim();

    if (nombre.length < 6 || !/^[a-zA-Z\s]*$/.test(nombre)) {
      alert("Por favor, introduzca un nombre válido (mínimo 6 caracteres y solo letras)");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Por favor, introduzca un correo electrónico válido");
      return;
    }

    console.log(`Nombre: ${nombre}\nEmail: ${email}`);

    setMensaje(
      `Gracias ${nombre}, te contactaremos lo antes posible vía correo electrónico.`
    );
  }
  return (
    <div>
      <form 
        onSubmit={handleSubmit}
       >
        <label htmlFor="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Enviar</button>
        
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Form;