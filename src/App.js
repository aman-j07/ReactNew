import "./App.css";
import Bill from "./components/Bill";
import Header from "./components/Header";
import Products from "./components/Products";
import basketball from "./components/images/basketball.png";
import football from "./components/images/football.png";
import soccer from "./components/images/soccer.png";
import tabletennis from "./components/images/table-tennis.png";
import tennis from "./components/images/tennis.png";
function App() {
  var products = [
    { id: 101, name: "Basket Ball", image: basketball, price: 150 },
    { id: 102, name: "Football", image: football, price: 120 },
    { id: 103, name: "Soccer", image: soccer, price: 110 },
    { id: 104, name: "Table Tennis", image: tabletennis, price: 130 },
    { id: 105, name: "Tennis", image: tennis, price: 100 },
  ];
  var cart = [
    { id: 101, name: "Basket Ball", image: basketball, price: 150 },
    { id: 102, name: "Football", image: football, price: 120 },
    { id: 103, name: "Soccer", image: soccer, price: 110 },
  ];
  return (
    <div className="container">
      <Header />
      <Products products={products} />
      <Bill cart={cart}/>
    </div>
  );
}

export default App;
