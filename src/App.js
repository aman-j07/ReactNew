import { createRef } from "react";
import { useState } from "react";
import "./App.css";
let arrErrors={name:"",email:"",password:"",address:"",phone:"",image:"",gender:"",DOB:"",imageClick:0};
let gender="";let values={}
let refName=createRef();let refEmail=createRef();let refPassword=createRef();let refAddress=createRef();let refPhone=createRef();let refGender=createRef();let refHobbies=createRef();let refImage=createRef();let refDOB=createRef();
function App() {
  const [header, setHeader] = useState(["header","Enter your details----"]);
  const [errors,setErrors]=useState({});
 
  const changeHandler = (event) => { 
    let id = event.target.getAttribute("id");
    let value = event.target.value;
    if (id === "inpName") {
      let regexName=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
      if (regexName.test(value) !== true) {
          arrErrors.name="Enter valid name";
      } else {
          arrErrors.name="";
      }
    }
    if (id === "inpEmail") {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regexEmail.test(value) !== true) {
        arrErrors.email="Enter valid email";
      } else {
        arrErrors.email="";
      }
    }
    if (id === "inpPassword") {
      let regexPassword=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/;
      if (regexPassword.test(value) !== true) {
        arrErrors.password="Password should contain an uppercase,a lowercase and a special character";
      } else {
        arrErrors.password="";
      }
    }
    if (id === "inpAddress") {
      let regexAddress=/^[a-zA-Z0-9\s,.'-]{3,}$/
      if (regexAddress.test(value) !== true) {
        arrErrors.address="Enter valid address";
      } else {
        arrErrors.address="";
      }
    }
    if (id === "inpPhone") {
      let regexPhone = /^\d{10}$/;
      if (regexPhone.test(value) !== true) {
        arrErrors.phone="Phone number should contain 10 digits";
      } else {
        arrErrors.phone="";
      }
    }
    if(id==="inpImage"){
      if(value!=""){
        arrErrors.image=""
        arrErrors.imageClick="";
      }
      else{
        arrErrors.image="Please select a file"
      }
    }
    if(id==="inpDOB"){
      if(value===""){
        arrErrors.DOB="Please select a date of birth"
      }
      else{
        arrErrors.DOB="";
      }
    }
    setErrors({...arrErrors})
  };


  const changeHandlerGender=(event)=>{
     gender=event.target.value;
     if(gender!=""){
      arrErrors.gender=""
     }
     setErrors({...arrErrors})
  }

  const clickHandlerRegister=()=>{
    if(new Set(Object.values(arrErrors)).size==1 && gender!=""){
      setHeader(["headerBlue","Your details are stored"])
    }
    else{
      if(refName.current.value===""){
        arrErrors.name="Enter a valid name"
      }
      if(refEmail.current.value===""){
        arrErrors.email="Enter a valid email"
      }
      if(refPassword.current.value===""){
        arrErrors.password="Password should contain an uppercase,a lowercase and a special character"
      }
      if(refAddress.current.value===""){
        arrErrors.address="Enter valid address";
      }
      if(refPhone.current.value===""){
        arrErrors.phone="Phone number should contain 10 digits";
      }
      if(refDOB.current.value===""){
        arrErrors.DOB="Please select a date of birth"
      }
      if(refImage.current.value===""){
        arrErrors.image="Please select a file"
      }
      if(gender===""){
        arrErrors.gender="Please select your gender"
      }
      setErrors({...arrErrors})
    }
  }
  const clickHandlerReset=()=>{
    arrErrors={name:"",email:"",password:"",address:"",phone:"",image:"",gender:"",DOB:"",imageClick:0};
    setErrors({...arrErrors})
    refName.current.value=refName.current.value=refEmail.current.value=refPassword.current.value=refAddress.current.value=refPhone.current.value=refDOB.current.value=refImage.current.value="";
    refGender.current.innerHTML="<input type='radio' name='gender'  value='Male' />Male<input type='radio' name='gender'  value='Female' />Female"
    refHobbies.current.innerHTML="<input onBlur={changeHandler} type='checkbox' value='Cricket' />Cricket<input onBlur={changeHandler} type='checkbox' value='Singing' />Singing<input onBlur={changeHandler} type='checkbox' value='Dancing' />Dancing"
  }
  return (
    <div>
      <form className="container">
      <div id="header">Student Registration Form</div>
      <div><label>Name of the Applicant</label>
      <div className="fname"><input type="text" placeholder="First"/><input type="text" placeholder="Last"/></div></div>
      <div><label>Date of Birth</label><input placeholder="MM/DD/YYYY" type="date" /></div>
      <div id="gender"><label>Gender</label><div><input name="gender" type="radio"/><label>Male</label></div><div><input type="radio" name="gender" /><label>Female</label></div></div>
      <div><label>Details of Siblings</label><textarea type="text" /></div>
      <label>Parent's Information</label>
      <div><label>Father's Name</label>
      <div className="fname"><input type="text" placeholder="First"/><input type="text" placeholder="Last"/></div></div>
      <div><label>Father's Qualification</label><input type="text" /></div>
      <div className="phem">
        <div ><label>Phone</label><input type="number" placeholder="### ### ####"/></div><div><label>Email</label><input type="email" /></div>
      </div>
      <div><label>Father's Occupation</label><input type="text" /></div>
      <div><label>Mother's Name</label>
      <div className="fname"><input type="text" placeholder="First"/><input type="text" placeholder="Last"/></div></div>
      <div><label>Mother's Qualification</label><input type="text" /></div>
      <div className="phem">
        <div ><label>Phone</label><input type="number" placeholder="### ### ####"/></div><div><label>Email</label><input type="email" /></div>
      </div>
      <div><label>Mother's Occupation</label><input type="text" /></div>
      <div><label>Address</label><input type="text" placeholder="Street Address"/></div>
      </form>
    </div>
  );
}

export default App;
