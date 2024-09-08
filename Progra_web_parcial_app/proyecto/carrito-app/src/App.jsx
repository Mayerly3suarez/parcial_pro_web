import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/login'
import { Autentication } from './pages/Autentication'
import { Dashboard } from './pages/Dashboard'
import { Register } from './pages/Register'
import { Productos } from './pages/Productos';
import { DetalleProducto } from './pages/DetalleProducto';

function App() {

  return (
    <Routes>
      //*<Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Autentication />} />
      <Route path="/registro" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:id" element={<DetalleProducto />} />
    </Routes>
  );
}

export default App
