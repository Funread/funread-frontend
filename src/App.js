import logo from './logo.svg';
import './App.css';
import Registration from './Registration/Registration';
import Login from './LoginPage/Login';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />}/>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
