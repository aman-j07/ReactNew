import "./App.css";
import A from "./components/A";
import { UserProvider } from "./components/Context";

function App() {
  return (
    <div className="container">
      <UserProvider value="Aman">
        <A />
      </UserProvider>
    </div>
  );
}

export default App;
