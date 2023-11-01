
import React, { useContext } from 'react'
import "../index.css"
import { ContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, changeTheme}= useContext(ContextGlobal)

  function handleChangeTheme(){
    changeTheme()
  }

  return (
    <nav className={`nav ${theme}`}>
      <a  href="/home"> Home</a>
      <a  href="/contact"> Contacto</a>
      <a  href="/favs"> Favoritos</a>


      <button onClick={handleChangeTheme}>Change theme   ☀ 🌙</button>
    </nav>
  )
}

export default Navbar