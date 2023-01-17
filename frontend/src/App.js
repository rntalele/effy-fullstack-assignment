// import logo from './logo.svg';
// import './App.css';
import HomePage from './components/HomePage';
import UserList from './components/UserList';
import {  Route, Routes } from 'react-router-dom';
import CompanyDetail from './components/CompanyDetail';
import CompanyUsers from './components/CompanyUsers';

export const config = {
  endpoint: `https://effy-backend.onrender.com/v1`,
};

function App() {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/companydetails/:id" element={<CompanyDetail/>} />
          <Route path="/company/:id/users" element={<CompanyUsers/>} />
        </Routes>
    </div>
  );
}

export default App;
