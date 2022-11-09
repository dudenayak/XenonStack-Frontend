import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home/home';
import Signup from './components/SignUp/signup';
import Login from './components/Login/login';
import Contact from './components/Contact/contact';

function App() {
  const user = localStorage.getItem('token');

  return (
    <Routes>
      {user && <Route path='/' exact element={<Home />} />}
      <Route path='/signup' exact element={<Signup />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/contact' exact element={<Contact />} />
      <Route path='/' element={<Navigate replace to='/login' />} />
    </Routes>
  );
}

export default App;
