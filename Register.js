import React, { useState } from 'react'

function Register() {
const userDetail = {
  name: "",
  email: "",
  password: ""
}
const [data, setData] = useState(userDetail);
  const handleInput = (d) =>
  {
console.log(d.target.value);
console.log(d.target.name);
const name = d.target.name;
const value = d.target.value;

setData({...data, [name]:value})

  }

const handleSubmit = (d) => {
  d.preventDefault();

  const getData = JSON.parse(localStorage.getItem("user") || "[]");

  let arr = [];
  arr = [...getData];
  arr.push(data);

localStorage.setItem("user", JSON.stringify(arr));
}

  console.log(data);
  return (
    <div>
      <div>
<form onSubmit={handleSubmit}>

  <div>
    <p>sign up</p>
  </div>
  <div className='account'>
    <input type='text' name='name' placeholder='enter username' onChange={handleInput} />
    <input type='email' name='email' placeholder='enter email' onChange={handleInput} />
    <input type='password' name='password' placeholder='enter password' onChange={handleInput} />
    <p>Already have an account ? <a href='/login'>Login</a></p>
  </div>
  <button>Signup</button>
</form>
</div>


      </div>
  )
}

export default Register