import { useState } from "react";
import "./App.css";
const arrCategories=[[],[],[],[]]
let idEdit=0;let indexEdit=0;
let numbers={income:0,expense:0,balance:0,totGrocery:0,totVeggies:0,totTravel:0,totMisc:0}
function App() {
  const[Numbers,setNumbers]=useState(numbers)
  const[Categories,setCategories]=useState(arrCategories)
  const[btn,setBtn]=useState("Add")
  
  const addIncome=()=>{
    let amt=document.getElementById("incomeAmount").value;
    numbers.income=parseFloat(parseFloat(numbers.income)+parseFloat(amt)).toFixed(2);
    calNumbers();
    document.getElementById("incomeAmount").value="";
  }

  const addExpense=()=>{
    let obj={text:"",amt:0};
    obj.text=document.getElementById("expenseText").value
    obj.amt=document.getElementById("expenseAmount").value
    let category=document.getElementById("selCategory").value
    document.getElementById("expenseAmount").value=""
    document.getElementById("expenseText").value=""
    document.getElementById("selCategory").selectedIndex=0
    document.getElementById("selCategory").disable=true;
    if(category>0){
      if(btn==="Add"){
        arrCategories[category-1].push(obj)
        console.log(arrCategories)
        setCategories([...arrCategories])
        calNumbers();
    }
    else{
      if(idEdit==category){
        arrCategories[idEdit-1][indexEdit]=obj;
        setCategories([...arrCategories])
      }
      else{
        category=parseInt(category)
        indexEdit=parseInt(indexEdit)
        console.log(category,indexEdit)
        console.log(arrCategories[category])
        arrCategories[category-1].push(obj);
        arrCategories[idEdit-1].splice(indexEdit,1)
      }
    } 
      calNumbers();
      setCategories([...arrCategories])
      setNumbers({...numbers})
    }
  }

  const clickDelete=(event)=>{
    let id="",key=0;
    id=event.target.parentNode.parentNode.getAttribute("id")
    key=event.target.parentNode.getAttribute("id")
    console.log(id,key)
    arrCategories[id-1].splice(key,1)
    calNumbers();
    setCategories([...arrCategories])
  }

  const calNumbers=()=>{
    numbers.expense=numbers.totGrocery=numbers.totVeggies=numbers.totTravel=numbers.totMisc=0;

    for(let i=0;i<arrCategories[0].length;i++){
      numbers.totGrocery=parseFloat(parseFloat(numbers.totGrocery)+parseFloat(arrCategories[0][i].amt)).toFixed(2);
    }
    for(let i=0;i<arrCategories[1].length;i++){
      numbers.totVeggies=parseFloat(parseFloat(numbers.totVeggies)+parseFloat(arrCategories[1][i].amt)).toFixed(2);
    }
    for(let i=0;i<arrCategories[2].length;i++){
      numbers.totTravel=parseFloat(parseFloat(numbers.totTravel)+parseFloat(arrCategories[2][i].amt)).toFixed(2);
    }
    for(let i=0;i<arrCategories[3].length;i++){
      numbers.totMisc=parseFloat(parseFloat(numbers.totMisc)+parseFloat(arrCategories[3][i].amt)).toFixed(2);
    }
    numbers.expense=parseFloat(parseFloat(numbers.totGrocery)+parseFloat(numbers.totVeggies)+parseFloat(numbers.totTravel)+parseFloat(numbers.totMisc));
    numbers.balance=parseFloat(parseFloat(numbers.income)-parseFloat(numbers.expense));
    setNumbers({...numbers})  
  } 

  const clickEdit=(event)=>{
    let id="",key=0;setBtn("Update");idEdit=0;indexEdit=0
    id=event.target.parentNode.parentNode.getAttribute("id")
    key=event.target.parentNode.getAttribute("id")
    idEdit=id;
    indexEdit=key;
    console.log(idEdit,indexEdit)
      document.getElementById("expenseAmount").value=arrCategories[id-1][key].amt;
      document.getElementById("expenseText").value=arrCategories[id-1][key].text;
      document.getElementById("selCategory").selectedIndex=id;
  }

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">{Numbers.balance}</h1>
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">{Numbers.income}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">{Numbers.expense}</p>
          </div>
        </div>
        <div className="form-control">
          <h3>Add New Income</h3>
          <div id="incomeInp">
            <input style={{width:"100%"}} type="number" id="incomeAmount" placeholder="Enter amount..." />
          </div>
          <button onClick={addIncome} className="btn">
          Add Income
        </button>
        </div>
        <div className="form-control">
          <h3>Add New Expense</h3>
          <div id="incomeInp">
            <input type="text" id="expenseText" placeholder="Enter text..." />
            <input type="number" id="expenseAmount" placeholder="Enter amount..." />
          </div>
          <select id="selCategory"><option value="0">----Select Category------</option><option value="1">Grocery</option><option value="2">Veggies</option><option value="3">Travelling</option><option value="4">Miscellaneous</option></select>
          <button onClick={addExpense} className="btn">
          {btn} Expense
        </button>
        </div>
        <h3>Expenses</h3>
        <div className="Categories">
        <div className="header"><h2>Grocery</h2><p>Total- {numbers.totGrocery}/-</p></div>
        <ul id="1" className="list">
          {Categories[0].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><button className="btnEdit" onClick={clickEdit}>Edit</button><button className="btnDelete" onClick={clickDelete}>Delete</button></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h2>Veggies</h2><p>Total- {numbers.totVeggies}/-</p></div>
        <ul id="2" className="list">
          {Categories[1].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><button className="btnEdit" onClick={clickEdit}>Edit</button><button className="btnDelete" onClick={clickDelete}>Delete</button></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h2>Travelling</h2><p>Total- {numbers.totTravel}/-</p></div>
        <ul id="3" className="list">
        {Categories[2].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><button className="btnEdit" onClick={clickEdit}>Edit</button><button className="btnDelete" onClick={clickDelete}>Delete</button></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h2>Miscellaneous</h2><p>Total- {numbers.totMisc}/-</p></div>
        <ul id="4" className="list">
        {Categories[3].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><button className="btnEdit" onClick={clickEdit}>Edit</button><button className="btnDelete" onClick={clickDelete}>Delete</button></li>})}
        </ul>
        </div>
      </div>
    </>
  );
}

export default App;
