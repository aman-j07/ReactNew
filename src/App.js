import './App.css';
import Product from './components/Product';
import basketball from './components/images/basketball.png'
import football from './components/images/football.png'
import soccer from './components/images/soccer.png'
import tabletennis from './components/images/table-tennis.png'
import tennis from './components/images/tennis.png'
function App() {
  return (
    <div className="App">
     <Product pic={basketball} name="Basketball" price="$90.00"/>
     <Product pic={football} name="Rugby Ball" price="$150.00"/>
     <Product pic={soccer} name="Football" price="$80.00"/>
     <Product pic={tabletennis} name="Billiards Ball" price="$110.00"/>
     <Product pic={tennis} name="Tennis Ball" price="$120.00"/>
    </div>
  );
}

export default App;
