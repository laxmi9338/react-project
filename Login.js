import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const navigate=useNavigate();


    const LoginHandle= async()=>{
        console.log(email,password)
        let result= await fetch("http://localhost:4500/login",{
          method:"post",
          body:JSON.stringify({email,password}),
          headers :{
            "Content-Type":"application/json"
          }
        });
        result= await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
        navigate('/')

        }else{
            alert("please enter correct details")
        }
    }
  return (
    <div className='login'>
        <input type='text' className='inputbox' placeholder='enter-email'
        onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type='password' className='inputbox' placeholder='enter-password'
         onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button className='appButton' type='button' onClick={LoginHandle}>Login</button>
    </div>
  )
}

export default Login
