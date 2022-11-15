import React from 'react'
import './form.css'

const form = () => {
  return (
    <div className='container' >
      <a href='/' className='tag'>Advertising Estimate form example</a>
      <form className='form'>
        <span style={{display:'block'}}>Advertising Estimate</span>
        <div className='inputDiv'>
        <label className='label'>Name</label>
        <input type="text" />
        </div>
      </form>
    </div>
  )
}

export default form