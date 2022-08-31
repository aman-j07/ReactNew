import React, { Component } from "react";
class SearchSuggestion extends Component {
  arrSuggestions = [];
  arrNames = ["Braden Cantrell","Isabel Lowe","Douglas Mack","Jefferson Donovan","Jaiden Walter","Brisa Blackwell","Declan Richmond","Scarlet Garrison","Slade Meza","Rubi Douglas","Aleah Robbins","Anahi Neal","Karlie Mills","River Fletcher","Brisa Henson","Stephany Landry","Lisa Brooks","Efrain Carney","Boston Holden","Bennett Munoz","Anabella Camacho","Darwin Mcguire","Moises Flores","Jaydan Simmons","Yaretzi Monroe","Theresa Christian","Madeline Gould","Abagail Blevins","Danica Case","Eliezer Alexander","Erica Velasquez","Gerardo Walter","Zaid Flowers","Skyler Charles","Ali Gilmore","Victor Bates","Kinley Holmes","Serena Dean","Haylie Burgess","Braylen Stephens","Brian Glass","Cloe Melton","Frederick Ramos","Amirah Mullins","Rishi Buchanan","Cynthia Calderon","Brian Campbell","Haiden Frost",];
  constructor(props) {
    super(props);

    this.state = {
      arrSuggestions: this.arrSuggestions,
    };
  }
  changeHandlerName = (event) => {
    this.arrSuggestions = [];
    let text = event.target.value;
    if (text !== "") {
      for (let i = 0; i < this.arrNames.length; i++) {
        if (text.toLowerCase() === this.arrNames[i].slice(0, text.length).toLowerCase()) {
          this.arrSuggestions.push(this.arrNames[i]);
        }
      }
    }
    this.setState({
      arrSuggestions: this.arrSuggestions,
    });
    console.log(this.arrSuggestions);
  };
  render() {
    return (
      <>
        <input type="text" placeholder="Enter a name" onChange={this.changeHandlerName} list="names"></input>
          <datalist id="names">
          {this.arrSuggestions.map((item) => (
            <option value={item}>{item}</option>
          ))}
          </datalist>
      </>
    );
  }
}

export default SearchSuggestion;
