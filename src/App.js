import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <Card header="Header 1" color="blue" title="Primary Card" text="Some quick example text to build on the card title and make up the bulk of card's content" />
      <Card header="Header 2" color="gray" title="Secondary Card" text="Some quick example text to build on the card title and make up the bulk of card's content" />
      <Card header="Header 3" color="green" title="Success Card" text="Some quick example text to build on the card title and make up the bulk of card's content" />
      <Card header="Header 4" color="red" title="Danger Card" text="Some quick example text to build on the card title and make up the bulk of card's content" />
    </div>
  );
}

export default App;
