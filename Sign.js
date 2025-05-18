import React, { useState } from 'react'
import Nav from './Nav'
import { Navigate, useNavigate } from 'react-router-dom';

const Sign = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [msg, setMsg] = useState("");
const navigate = useNavigate();

const handleInput = (d) => {

  const value = d.target.value;
  const name = d.target.name;

  if("email" == name){

    setEmail(value);
  }
  if("password" == name){

    setPassword(value);
  }
}
const handleSubmit = (d) => {

d.preventDefault();
let getDetails = JSON.parse(localStorage.getItem("user"));
console.log("getDetails");
getDetails.map((curValue) => {
  console.log(curValue.email);

  let storeEmail = curValue.email;
  let storePassword = curValue.password;

 if (storeEmail == email && storePassword == password)
 {

  alert("login successfull");
   navigate('/index');
 }
 else{

  alert("wrong inpput");
 }
})
}
  return (
    <div>
      <Nav />
      <div>
<form onSubmit={handleSubmit} className='login-form'>

  <div>
    <p>Login</p>
  </div>
  <div className='account'>
    
    <input type='text' name='email' placeholder='enter email' onChange={handleInput}/>
    <input type='text' name='password' placeholder='enter password' onChange={handleInput} />
    <p>Already have an account ? <a href='/login'>Login</a></p>
  </div>
  <button>Login</button>
</form>
</div>


      </div>
  )
}

export default Sign
