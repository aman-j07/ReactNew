import './App.css';
import HelloWorldDefault from './components/HelloWorld';
import { HelloWorldNamed } from './components/HelloWorld';

function App() {
return (
<div className="App">
<HelloWorldDefault />
<HelloWorldNamed />
</div>
);
}

export default App;
