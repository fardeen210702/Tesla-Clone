import React from 'react'

function HeaderBottom() {
  return (
    <div className='bottomheader'>
         <div className='midheader'>
        <h1> Model Y</h1>
        <p>Lease starting at $399/mo* </p>
    </div>
    <div className="secondbottom">

        <div className="btns">
            <button className='btn1'> Explore Inventory</button>
            <button className='btn2'>Demo Drive</button>
        </div>
        <div className="para">
            <p>*Excludes taxes and fees with price subject to change. Available in select states. <span>See Details</span></p>
        </div>
    </div>
    </div>
  )
}

export default HeaderBottom