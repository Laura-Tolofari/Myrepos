import styles from './../../styles/feedbacks.module.css'
import { useRef, useState} from 'react'  


export default function Feedbacks(){
    const firstNameRef=useRef()
    const lastNameRef=useRef()
    const ageRef=useRef()
    const phoneRef=useRef()
    //submit form
    const[errorMsg,setErrorMsg]=useState()
    function submitHandler(e){
    e.preventDefault()
    const firstNameValue=firstNameRef.current.value
    const lastNameValue=lastNameRef.current.value
    const ageValue=ageRef.current.value
    const phoneValue=phoneRef.current.value
    
    //store input values in an object
    const userData={
      firstName:firstNameValue,
      lastName:lastNameValue,
      age:ageValue,
      phone:phoneValue
    

    }
    //validation
    if(firstNameValue===undefined){
        setErrorMsg('Please fill in firstname')
    }
    //sending the request to an Api
    //send a post request to our api
    async function sendApi(){
     const response= await fetch('/api/feedbacks',{
        method:"POST",
        body:JSON.stringify(userData),
        header:{
          "content-type":"application/json"
        }
     }
     )
     //get the response from the request
     const data=await response.json()
     console.log(data);
    }
     //call the sendApi function
     sendApi()
  }

  // assignment

  //reference
  const userNameRef=useRef()
  const bloodGroupRef=useRef()
  const genotypeRef=useRef()
  const maritalStatusRef=useRef()

 //error msg
 const[error,setError]=useState()
 //submitting form
 function submitHandle(e){
  e.preventDefault()
  const userNameValue=userNameRef.current.value
  const bloodGroupValue=bloodGroupRef.current.value
  const genotypeValue=genotypeRef.current.value
  const maritalStatusValue=maritalStatusRef.current.value

  //store data in an object
  const clientData={
    userName:userNameValue,
    bloodGroup:bloodGroupValue,
    genotype:genotypeValue,
    maritalStatus:maritalStatusValue
  }
  //validation
  if(userName===undefined){
    setError("Space must not be empty")
  }
  //sending the request to an Api
    //send a post request to our api
    async function moveApi(){
      const response= await fetch('/api/feedbacks',{
         method:"POST",
         body:JSON.stringify(clientData),
         header:{
           "content-type":"application/json"
         }
      }
      )
      //get the response from the request
      const data=await response.json()
      console.log(data);
     }
      //call the sendApi function
      moveApi()
 }

return(
  <>
<div className={styles.wrapper}>
 <form onSubmit={submitHandler}>
   <div className={styles.formControl}>
     <label>Firstname</label>
     <input type="text" className={styles.input} ref={firstNameRef}></input>
   </div>

   <div className={styles.formControl}>
     <label>Lastname</label>
     <input type="text" className={styles.input} ref={lastNameRef}></input>
   </div>

   <div className={styles.formControl}>
     <label>Age</label>
     <input type="text" className={styles.input} ref={ageRef}></input>
   </div>

   <div className={styles.formControl}>
     <label>Phone Number</label>
     <input type="number" className={styles.input} ref={phoneRef}></input>
   </div>
    <button>Register</button>
 </form>
</div>

{/* assignment */}
<div className={styles.wrapper}>
<form action="">
  <input type="text" placeholder='Username' className={styles.input} ref={userNameRef}></input>
  <input type="text" placeholder='Blood Group' className={styles.input} ref={bloodGroupRef}></input>
  <input type="text" placeholder='Genotype' className={styles.input} ref={genotypeRef}></input>
  <input type="text" placeholder='Marital Status' className={styles.input} ref={maritalStatusRef}></input>
   <button>Submit</button>
</form>
</div>
</>
)}