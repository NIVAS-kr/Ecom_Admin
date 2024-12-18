// src/App.js
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login"; 

function App() {
  const user = false; 

  return (
    <div>
   <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      
    </Routes>
    </div>
  );
}

export default App;
