import './style/style.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './pages/Cadastro';
import CardPost from './components/CardPost';
import CardHome from './components/CardHome';
import Profile from './pages/Profile';

function App() {

  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
  <Route path="/cadastro" element={<Cadastro/>}/>
  <Route path="/cardpost" element={<CardPost/>}/>
  <Route path="/cardhome" element={<CardHome/>}/>
  <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </AuthProvider>
  )
}

export default App;
