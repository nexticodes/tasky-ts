import React from 'react';
import './styles.css';

function InputField() {
  return (
    <form className='input'>
        <input type='input' placeholder='Enter a Task!' className='input__box' />
        <button className='input_submit'>Go</button>
    </form>
  )
}

export default InputField