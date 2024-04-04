import React, { useState } from 'react'

function Addproduct() {
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    
    const[company,setCompany]=useState("");
    const[error,setError]=useState("")

  const addProduct= async()=>{
    console.log(!name);

    if(!name || !price || !category || !company){
      setError (true)
      return false
    }
    console.log(name,price,category,company);
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    let result=await fetch("http://localhost:4500/add-product",{
      method:"post",
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{
        'Content-Type':'application/json'
      }


    });
    result= await result.json()
    console.log(result)
    localStorage.setItem('user',JSON.stringify(result))
  }



  return (
    <div className='nav-add'>
      <input type="text"  className='inputbox' placeholder='Enter your name'
       value={name}  onChange={(e)=>setName(e.target.value)}/>
        {error && !name &&     <span className='invalid-input'> Enter valid name </span> }

      <input type="text"  className='inputbox' placeholder='Enter your price' value={price} 
       onChange={(e)=>setPrice(e.target.value)} />
        {error && !price &&     <span className='invalid-input'> Enter valid price </span> }

      <input type="text"  className='inputbox' placeholder='Enter your category' value={category}
        onChange={(e)=>setCategory(e.target.value)}/>
         {error && !category &&     <span className='invalid-input'> Enter valid category </span> }

      <input type="text"  className='inputbox' placeholder='Enter your company' value={company} 
       onChange={(e)=>setCompany(e.target.value)}/>
        {error && !company &&     <span className='invalid-input'> Enter valid company </span> }
      <button type='button' className='appButton' onClick={addProduct}> Add product</button>
    </div>
  )
}

export default Addproduct
