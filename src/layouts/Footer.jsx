import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faFacebookSquare, faYoutube, faLinkedin, faInstagram, faTwitterSquare   } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const d = new Date();
let year = d.getFullYear();
  return (
    <footer className='w-screen'>
        <section className='home flex flex-col flex-wrap h-60 items-center justify-center'>
<div className='footer-icon text-center px-4 text-2xl text-white flex justify-center gap-6'>

  <FontAwesomeIcon icon={faYoutube} />
  <FontAwesomeIcon icon={faFacebookSquare} />
  <FontAwesomeIcon icon={faLinkedin} />
  <FontAwesomeIcon icon={faInstagram} />
  <FontAwesomeIcon icon={faTwitterSquare} />
</div>
<div className='footer-inner text-center px-4 my-8 text-white flex justify-center gap-6'>
  <Link to="/terms">Terms of services</Link>
  <Link to="/privacy">Privacy Policy</Link>
</div>
<div className='footer-copyright'>
<h5 className='text-white my-4 text-center'>Copyright {year} &copy; Pelddle Technologies. All Rights Reserved</h5>
</div>
        </section>
    </footer>
  )
}

export default Footer