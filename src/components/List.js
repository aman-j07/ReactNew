import React, { Component, createRef } from "react";

class List extends Component {
  refId = createRef();
  refName=createRef();
  refPrice=createRef();
  products=[];
  constructor(props) {
    super(props)
  
    this.state = {
       products:"",
       empty:"",
       tabId:"product"
    }
  }
  clickHandlerAdd=()=>{
    let id=this.refId.current.value;
    let name=this.refName.current.value;
    let price=this.refPrice.current.value;
    if(id===""||name===""||price===""){
       this.setState({
        empty:"Please enter all the fields!"
       })
    }
    else{

        let obj={};
        obj={
            id:id,
            name:name,
            price:price
        };
        this.products.push(obj)
        console.log(this.products)
        this.setState({
            product:this.products,
            empty:"",
            tabId:"productVisible"
        })
    }
  }
  render() {
    return (
      <>
        <div id="form">
          <div id="id">
            <label>Product Id</label>
            <input type="number" id="idinput" ref={this.refId}/>
          </div>
          <div id="name">
            <label>Product Name</label>
            <input type="text" id="nameinput" ref={this.refName}/>
          </div>
          <div id="price">
            <label>Product Price</label>
            <input type="number" id="priceinput" ref={this.refPrice}/>
          </div>
          <button onClick={this.clickHandlerAdd}>ADD PRODUCT</button>
        </div>
        <p id="paraEmpty">{this.state.empty}</p>
        <table id={this.state.tabId}>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
            {this.products.map(item=>{return <tr><td>{item.id}</td><td>{item.name}</td><td>{item.price}</td></tr>})}
        </table>
      </>
    );
  }
}

export default List;