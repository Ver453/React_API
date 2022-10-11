// import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom';  

import './App.css';
import Dashboard from './Dashboard';
import Form from './Form.js'
import Login from './Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
