import React, { useState } from 'react'

const arrUsers=[{name:"Aman",email:"aman@gmail.com",username:"Aman7",password:"Pass@1234",phone:"1234567890",country:"India",city:"Lucknow",pincode:"226001"}];
let errors={phone:"",email:"",username:"",userphone:"",useremail:""}
let newUser=false;
const Home = () => {
    const [Errors,setErrors]=useState({})

    const SignUp=()=>{
        errors={};newUser=true
        let name=document.getElementById("newName").value;
        let email=document.getElementById("newEmail").value;
        let username=document.getElementById("newUsername").value;
        let password=document.getElementById("newPassword").value;
        let phone=document.getElementById("newPhone").value;
        let country=document.getElementById("newCountry").value;
        let city=document.getElementById("newCity").value;
        let pincode=document.getElementById("newPincode").value;
        for(let i=0;i<arrUsers.length;i++){
            if(arrUsers[i].username===username){
                errors.username="This username is already in use please use other"
                newUser=false;
            }
            if(arrUsers[i].email===email){
                errors.useremail="An account with this email already exists"
                newUser=false;
            }
            if(arrUsers[i].phone===phone){
                errors.userphone="An account with this number already exists"
                newUser=false;
            }
        }
        if(newUser==true){
        let regexPhone=/^\d{10}$/;
        let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regexEmail.test(email)!=true){
            document.getElementById("newEmail").style.border="1px solid red"
            errors.email="Enter valid email"
        }
        if(regexPhone.test(phone)!=true){
            document.getElementById("newPhone").style.border="1px solid red"
            errors.phone="Enter valid phone"
        }
    }
        setErrors({...errors})
        console.log(errors)
        if(Object.values(errors).every((v) => v === "")){
            alert("Account created")
            const List= document.querySelectorAll("input");
            List.forEach(item=>{item.value="";item.style.border="none"})
        }
    }
    const changeAlphabet=(event)=>{

    }

  return (
    <div id="containerSignLog">
     <div id="signLog">
     <div id="signUp">
        <p className="signLogHeading">Sign Up</p>
        <div>
          <input className='inp' placeholder="Enter your name" type="text" id="newName"/>
          <input className='inp' placeholder="Enter your email" type="email" id="newEmail"/>
          <p className="paraError">{Errors.email}</p> 
          <input className='inp' placeholder="Enter your username" type="text" id="newUsername"/>      
          <input className='inp' placeholder="Enter new password" type="password" id="newPassword"/>        
          <input className='inp' placeholder="Enter your number" type="number" id="newPhone"/>  
          <p className="paraError">{Errors.phone}</p> 
          <input className='inp' placeholder="Enter your country" type="text" id="newCountry"/> 
          <input className='inp' placeholder="Enter your city" type="text" id="newCity"/>  
          <input className='inp' placeholder="Enter your pincode" type="number" id="newPincode"/> 
        </div>
        <button onClick={SignUp} id="newSubmit">
          Sign Up
        </button>
      </div>
    </div>
  </div>
  )
}

export default Home