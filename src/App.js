import { createRef } from "react";
import { useState } from "react";
import "./App.css";
let arrErrors={name:"",email:"",password:"",address:"",phone:"",image:"",gender:"",DOB:"",imageClick:0};
let gender="";let refName=createRef();let refEmail=createRef();let refPassword=createRef();let refAddress=createRef();let refPhone=createRef();let refGender=createRef();let refHobbies=createRef();let refImage=createRef();let refDOB=createRef();
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
    document.getElementsByClassName("container").reset();
}
  return (
      <form className="container">
      <div id={header[0]}>{header[1]}</div>
      <div>
        <div className="labels">Enter your Name</div>
        <div className="inputs">
          <input onBlur={changeHandler} ref={refName} type="text" id="inpName" />
        </div>
      </div>
      <p className="paraError">{errors.name}</p>
      <div>
        <div className="labels">Enter your Email</div>
        <div className="inputs">
          <input onBlur={changeHandler} type="email" ref={refEmail} id="inpEmail" />
        </div>
      </div>
      <p className="paraError">{errors.email}</p>
      <div>
        <div className="labels">Enter your Password</div>
        <div className="inputs">
          <input onBlur={changeHandler}  type="password" ref={refPassword} id="inpPassword" />
        </div>
      </div>
      <p className="paraError">{errors.password}</p>
      <div>
        <div className="labels">Enter your Address</div>
        <div className="inputs">
          <textarea  onBlur={changeHandler} ref={refAddress} id="inpAddress" />
        </div>
      </div>
      <p className="paraError">{errors.address}</p>
      <div>
        <div className="labels">Enter your Mobile</div>
        <div className="inputs">
          <input onBlur={changeHandler} ref={refPhone} type="number" id="inpPhone" />
        </div>
      </div>
      <p className="paraError">{errors.phone}</p>
      <div>
        <div className="labels">Select your Gender</div>
        <div className="inputs" onChange={changeHandlerGender} ref={refGender}>
          <input type="radio" name="gender"  value="Male" />Male
          <input type="radio" name="gender"  value="Female" />Female
        </div>
      </div>
      <p className="paraError">{errors.gender}</p>
      <div>
        <div className="labels">Enter your Hobbies</div>
        <div className="inputs" ref={refHobbies} id="inpHobbies">
          <input onBlur={changeHandler} type="checkbox" value="Cricket" />Cricket
          <input onBlur={changeHandler} type="checkbox" value="Singing" />Singing
          <input onBlur={changeHandler} type="checkbox" value="Dancing" />Dancing
        </div>
      </div>
      <p className="paraError"></p>
      <div>
        <div className="labels">Choose your Profile Pic</div>
        <div className="inputs">
          <input id="inpImage" onBlur={changeHandler} ref={refImage} type="file" />
        </div>
      </div>
      <p className="paraError">{errors.image}</p>
      <div>
        <div className="labels">Select your DOB</div>
        <div className="inputs">
         <input id="inpDOB" type="date" ref={refDOB} onChange={changeHandler}/>
        </div>
      </div>
      <p className="paraError">{errors.DOB}</p>
      <div id="footer">
        <button id="btnRegister" onClick={clickHandlerRegister}>Register Me</button>
        <button id="btnReset" onClick={clickHandlerReset}>Reset</button>
      </div>
      </form>
  );
}

export default App;
