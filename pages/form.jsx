import { useRef,useState } from "react"
// the use ref is an object and  it returns a property called current
// the current holds the value 


export default function Form(){
    // const userData=[user, setUser]=useState({})
    // declear a variable form elements
    const nameInput=useRef()
    const emailInput =useRef()
    const passwordInput=useRef()
    const genderInput=useRef()
// create a submit function that will log  the formADta to the console
function submitHandler(e){
    e.preventDefault()
      const nameValue=nameInput.current.value
     const emailValue=emailInput.current.value 
     const passwordValue=passwordInput.current.value
      const genderValue=genderInput.current.value
      // passing all form input value to the an object     
      const formData={
     userName:nameValue,
      Email:emailValue, 
      password:passwordValue,
      gender:genderValue}
        console.log(formData);}
    return(
     // in react we have two way s of handling form inputs        
     // 1. the controlled way        
     // 2. the uncontrolled way, we are using the uncontrolled way using the useRef hook   
<form action="" onSubmit={submitHandler}>
     <label htmlFor="Enter your name"></label>
     <input type="text" id='name' placeholder="Enter your name" ref={nameInput}/>
     <label htmlFor="Enter your email"></label>
     <input type="email" id='email' placeholder="Enter your email" ref={emailInput}/>
     <label htmlFor="Enter your Password"></label>
     <input type="password" id='password' placeholder="Enter your password" ref={passwordInput} />
     <label htmlFor="">Enter A gender</label>
     <label htmlFor="">Male</label>
     <input type="radio" name='gender' value="male" ref={genderInput}/>
     <label htmlFor="">Female</label>
     <input type="radio" name='gender' value='female' ref={genderInput}/>
     <button>Submit</button>
</form>
)}