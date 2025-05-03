import React from 'react'

function Sign() {
  return (
    <div>
      <div>
<form>

  <div>
    <p>Login</p>
  </div>
  <div className='account'>
    
    <input type='text' name='email' placeholder='enter email' />
    <input type='text' name='password' placeholder='enter password' />
    <p>Already have an account ? <a href='/login'>Login</a></p>
  </div>
  <button>Login</button>
</form>
</div>


      </div>
  )
}

export default Sign
