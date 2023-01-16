// import logo from './logo.svg';
// import './App.css';
import HomePage from './components/HomePage';
// import { Route, Switch } from "react-router-dom";
import UserList from './components/UserList';
import { Router, Route, Routes } from 'react-router-dom';

export const config = {
  endpoint: `http://localhost:8082/v1`,
};

function App() {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/users" element={<UserList/>} />
        </Routes>
    </div>
  );
}

export default App;
