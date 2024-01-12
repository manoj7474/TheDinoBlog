//import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Settings from "./pages/usersettings/settings";
import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={user?<Home/>:<Register/>}/>
        <Route path="/login" element={user?<Home/>:<Login/>}/>
        <Route path="/profile" element={user?<Settings/>:<Register/>}/>
        <Route path="/write" element={user?<Write/>:<Home/>}/>
        <Route path="/post/:postid" element={<Single/>}/>
      </Routes>
      </Router>
     
      
      

    </div>
  );
}

export default App;
