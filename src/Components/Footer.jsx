import React, { useContext } from 'react'
import "../index.css"
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const {theme}= useContext(ContextGlobal)
  return (
    <footer className={`footer ${theme}`}>
        <p>Powered by</p>
        <img src={process.env.PUBLIC_URL + '/images/DH.png'} alt='DH-logo' />
    </footer>
  )
}

export default Footer