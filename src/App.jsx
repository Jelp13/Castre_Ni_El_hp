import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Detalle from './detalle'
import Favoritos from './favoritos'
import Home from './home'
import Informativa from './informativa'
import Original from './original'
import './App.css'


function App() {

  return ( 
    <>
      <Router>
        <nav className="c-menu">
          <Link to="/">Home </Link>
          <Link to="/informativa">Informativa </Link>
          <Link to="/original">Original </Link>
          <Link to="/favoritos">Favoritos </Link>
          <Link to="/detalle">Detalles </Link>
          
        </nav>

      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/informativa" element={<Informativa /> } />
          <Route path="/original" element={<Original /> } />
          <Route path="/favoritos" element={<Favoritos /> } />
          <Route path="/detalle/:depto/:municipio" element={<Detalle /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
