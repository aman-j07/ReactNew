import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stores from './components/Stores';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Stores/>
    </div>
  );
}

export default App;
