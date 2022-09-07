import { useState } from "react";
import "./App.css";
let arrErrors={stname:"",email:"",address:"",phone:"",gender:"",DOB:"",sibling:"",Fname:"",fQualification:"",fPhone:"",fEmail:"",fOccupation:"",Mname:"",mQualification:"",mPhone:"",mEmail:"",mOccupation:""};
let gender="";
let filled=""
function App() {
  const [errors,setErrors]=useState({});
  const [Filled,setfilled]=useState("");

  const changeHandler = (event) => { 
    console.log(document.getElementById("header").innerHTML)
    let id = event.target.getAttribute("id");
    let value = event.target.value;
    let regexName=/^[a-zA-Z ]{2,20}$/;
    let regexString=/^[a-zA-Z ]{2,}$/;
    let regexPhone = /^\d{10}$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (id === "stFname") {
      if (regexName.test(value) !== true) {
          arrErrors.stname="Enter valid name";
      } else {
          arrErrors.stname="";
      }
    }
    if (id === "stLname") {
      if (regexName.test(value) !== true) {
          arrErrors.stname="Enter valid name";
      } else {
          arrErrors.stname="";
      }
    }
    if(id==="inpDOB"){
      let year=value.slice(0,4)
      if(value===""){ 
        arrErrors.DOB="Please select a date of birth"
      }
      else if(year>2002){
        arrErrors.DOB="Date of birth should be of before 2002"
      }
      else{
        arrErrors.DOB="";
      }
    }
    if(id==="gender"){
      if(value!=""){
       arrErrors.gender=""
      }
    }
    if (id === "inpSiblings") {
      if (regexString.test(value) !== true) {
          arrErrors.sibling="Enter valid name";
      } else {
          arrErrors.sibling="";
      }
    }
    if (id === "Ffname") {
      if (regexName.test(value) !== true) {
          arrErrors.Fname="Enter valid name";
      } else {
          arrErrors.Fname="";
      }
    }
    if (id === "Flname") {
      if (regexName.test(value) !== true) {
          arrErrors.Fname="Enter valid name";
      } else {
          arrErrors.Fname="";
      }
    }
    if (id === "fQualification") {
      if (value.length<6) {
        arrErrors.fQualification="Enter more than 6 characters";
    } else {
      arrErrors.fQualification="";
    }
    }
    if (id === "fPhone") {
      if (regexPhone.test(value) !== true) {
          arrErrors.fPhone="Enter valid number";
      } else {
        arrErrors.fPhone="";
      }
    }
    if (id === "fEmail") {
      if (regexEmail.test(value) !== true) {
        arrErrors.fEmail="Enter valid email";
      } else {
        arrErrors.fEmail="";
      }
    }
    if (id === "fOccupation") {
      if (value.length<6) {
        arrErrors.fOccupation="Enter more than 6 characters";
    } else {
      arrErrors.fOccupation="";
    }
    }
    if (id === "Mfname") {
      if (regexName.test(value) !== true) {
          arrErrors.Mname="Enter valid name";
      } else {
          arrErrors.Mname="";
      }
    }
    if (id === "Mlname") {
      if (regexName.test(value) !== true) {
          arrErrors.Mname="Enter valid name";
      } else {
          arrErrors.Mname="";
      }
    }
    if (id === "mQualification") {
      if (value.length<6) {
          arrErrors.mQualification="Enter more than 6 characters";
      } else {
        arrErrors.mQualification="";
      }
    }
    if (id === "mPhone") {
      if (regexPhone.test(value) !== true) {
          arrErrors.mPhone="Enter valid number";
      } else {
        arrErrors.mPhone="";
      }
    }
    if (id === "mEmail") {
      if (regexEmail.test(value) !== true) {
        arrErrors.mEmail="Enter valid email";
      } else {
        arrErrors.mEmail="";
      }
    }
    if (id === "mOccupation") {
      if (value.length<6) {
        arrErrors.mOccupation="Enter more than 6 characters";
    } else {
      arrErrors.mOccupation="";
    }
    }
    setErrors({...arrErrors})
  };

  const clickHandlerRegister=()=>{
    filled="";
    let flag=true;
    const onlyInputs = document.querySelectorAll('.container .inp');
    const elements=[];
    onlyInputs.forEach(input => {
      elements.push(input.value)
      if(input.value1===""||arrErrors.gender!=""){
        flag=false
      }
      else{
        flag=true
      }
    });
    if(flag==true){
      alert("You have registered successfully")
    }
    else{
      filled="Enter all the fields"
    }
    setfilled(filled)
    clickHandlerReset();
  }

  const clickHandlerReset=()=>{
    arrErrors={stname:"",email:"",address:"",phone:"",gender:"",DOB:"",sibling:"",Fname:"",fQualification:"",fPhone:"",fEmail:"",fOccupation:"",Mname:"",mQualification:"",mPhone:"",mEmail:"",mOccupation:""};
    setErrors({...arrErrors})
}
  return (
    <div>
      <form className="container">
      <div id="header">Student Registration Form</div>
      <div><label>Name of the Applicant</label>
      <div className="fname" ><input onChange={changeHandler} className="inp" type="text" id="stFname" placeholder="First"/><input onChange={changeHandler} type="text" placeholder="Last" className="inp" id="stLname"/></div>
      <p className="errors">{arrErrors.stname}</p></div>
      <div><label>Date of Birth</label><input onChange={changeHandler} placeholder="MM/DD/YYYY" type="date" className="inp" id="inpDOB" /><p className="errors">{arrErrors.DOB}</p></div>
      <div id="gender" onChange={changeHandler}><label>Gender</label><div><input name="gender" type="radio"/><label>Male</label></div><div><input type="radio" name="gender" /><label>Female</label></div><p className="errors">{arrErrors.gender}</p></div>
      <div><label>Details of Siblings</label><textarea className="inp" id="inpSiblings" onChange={changeHandler} type="text" /> <p className="errors">{arrErrors.sibling}</p></div>
      <label>Parent's Information</label>
      <div><label>Father's Name</label>
      <div className="fname"><input onChange={changeHandler}  className="inp" id="Ffname" type="text" placeholder="First"/><input onChange={changeHandler} type="text" id="Flname" placeholder="Last" className="inp"/></div><p className="errors">{arrErrors.Fname}</p></div>
      <div><label>Father's Qualification</label><input onChange={changeHandler} type="text" className="inp" id="fQualification" /><p className="errors">{arrErrors.fQualification}</p></div>
      <div className="phem">
        <div ><label>Phone</label><input onChange={changeHandler} type="number" id="fPhone" className="inp" placeholder="### ### ####"/><p className="errors">{arrErrors.fPhone}</p></div><div><label>Email</label><input onChange={changeHandler} type="email" className="inp" id="fEmail"/><p className="errors">{arrErrors.fEmail}</p></div>
      </div>
      <div><label>Father's Occupation</label><input className="inp" onChange={changeHandler} type="text" id="fOccupation"/><p className="errors">{arrErrors.fOccupation}</p></div>
      <div><label>Mother's Name</label>
      <div className="fname" ><input className="inp" onChange={changeHandler} id="Mfname" type="text" placeholder="First"/><input className="inp" onChange={changeHandler} type="text" id="Mlname" placeholder="Last"/></div><p className="errors">{arrErrors.Mname}</p></div>
      <div><label>Mother's Qualification</label><input className="inp" id="mQualification" onChange={changeHandler} type="text" /><p className="errors">{arrErrors.mQualification}</p></div>
      <div className="phem">
        <div ><label>Phone</label><input className="inp" onChange={changeHandler} type="number" id="mPhone"  placeholder="### ### ####"/><p className="errors">{arrErrors.mPhone}</p></div><div><label>Email</label><input className="inp" onChange={changeHandler} id="mEmail" type="email" /><p className="errors">{arrErrors.mEmail}</p></div>
      </div>
      <div><label>Mother's Occupation</label><input className="inp" onChange={changeHandler} type="text" id="mOccupation" /><p className="errors">{arrErrors.mOccupation}</p></div>
      <div><label>Address</label><input className="inp" onChange={changeHandler} type="text" placeholder="Street Address" id="inpAddress"/><p className="errors">{arrErrors.address}</p></div>
      <div id="footer"><div><button id="btnRegister" onClick={clickHandlerRegister}>Register Me</button></div>
      <div><button id="btnReset" type="reset" onClick={clickHandlerReset}>Reset</button></div></div>
      </form>
      <p id="empty">{filled}</p>
    </div>
  );
}

export default App;
