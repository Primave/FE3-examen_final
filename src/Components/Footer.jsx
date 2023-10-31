import React from 'react'

const Footer = () => {
  return (
<footer>
      
      <p>Powered by</p>
      <img src={DH}alt='DH-logo' />
      
      <div className="iconBox">
        <img className="iconFooter"  src={iconFacebook}alt='fc-logo' />
        <img className="iconFooter"  src={iconInstagram}alt='ig-logo' />
        <img className="iconFooter"  src={iconTiktok}alt='tt-logo' />
        <img className="iconFooter"  src={iconWhatsapp}alt='wh-logo' />
      </div>
  </footer>
)
}

export default Footer
