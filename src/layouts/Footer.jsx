import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  const d = new Date();
let year = d.getFullYear();
  return (
    <footer>
        <section className='home flex flex-col'>
<div className='footer-icon'></div>
<div className='footer-inner text-center px-4 text-white flex justify-center gap-6'>
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