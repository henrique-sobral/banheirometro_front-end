import './style/style.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";
import Cadastro from './pages/Cadastro';
import CardPost from './components/CardPost';
import CardHome from './components/CardHome';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
  <Route path="/cadastro" element={<Cadastro/>}/>
  <Route path="/cardpost" element={<CardPost/>}/>
  <Route path="/cardhome" element={<CardHome/>}/>
    </Routes>
    </>
  )
}

export default App;
