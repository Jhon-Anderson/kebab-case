import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contaminacion from './pages/problem/contaminacion/Contaminacion';
import Escasez from './pages/problem/escasez/Escasez';
import Acidificacion from './pages/problem/acidificacion/Acidificacion';
import Autenticacion from './pages/autenticacion/Autenticacion';
import Lobby from './pages/Juegos/Lobby';
import Home from './pages/Home';
import Agua1 from './pages/problem/escasez/agua1';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Autenticacion />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contaminacion" element={<Contaminacion />} />
        <Route path="/escasez" element={<Escasez />} />
        <Route path="/acidificacion" element={<Acidificacion />} />
<<<<<<< HEAD
        
        <Route path="/lobby" element={<Lobby />} />
=======
        <Route path="/agua1" element={<Agua1 />} /> 
>>>>>>> jdcr
      </Routes>
    </Router>
  </StrictMode>
);
