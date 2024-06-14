import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
