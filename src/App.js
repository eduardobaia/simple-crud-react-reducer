import "./App.css";
import { AddUser } from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div style={{maxWidth: "30rem", margin:"4rem auto"}}>
      <GlobalProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/add" element={ <AddUser />} />
          <Route exact path="/edit/:id" element={   <EditUser />} />
          
        
        </Routes>
      </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
