import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="innerfooter">
            <li>Tesla © {new Date().getFullYear()}</li>
            <li>Privacy & Legal</li>
            <li>Vehicle Recalls</li>
            <li>Contact</li>
            <li>News</li>
            <li>Get Updates</li>
            <li>Locations</li>
        </div>
    </div>
  )
}

export default Footer