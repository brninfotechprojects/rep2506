import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Mahalakshmi from "./github/Mahalakshmi";
import Venkat from "./github/Venkat";
import Git from "./github/Git";
import Bhava from "./github/Bhava"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Git></Git>}></Route>
        <Route path="/bhava" element={<Bhava></Bhava>}></Route>
        <Route path="/mahalakshmi" element={<Mahalakshmi></Mahalakshmi>}></Route>
        <Route path="/venkat" element={<Venkat></Venkat>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
