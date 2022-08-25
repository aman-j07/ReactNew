import './App.css';
import HelloWorldUsingDefault from './components/HelloWorld';
import { HelloWorldUsingNamed } from './components/HelloWorld';

function App() {
return (
<div className="App">
<HelloWorldUsingDefault/>
<HelloWorldUsingNamed/>
</div>
);
}

export default App;
