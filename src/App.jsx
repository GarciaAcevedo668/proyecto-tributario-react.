import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TarjetasServicios from './components/TarjetasServicios';
import FormularioContacto from './components/FormularioContacto';
import TablaRegistros from './components/TablaRegistros';
import './App.css';

export default function App() {
  const [contactos, setContactos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  useEffect(() => {
    const listaGuardada = JSON.parse(localStorage.getItem('contactos')) || [];
    setContactos(listaGuardada);
  }, []);

  const agregarContacto = (nuevoContacto) => {
    const nuevaLista = [...contactos, nuevoContacto];
    setContactos(nuevaLista);
    localStorage.setItem('contactos', JSON.stringify(nuevaLista));
  };

  return (
    <div className="contenedor-principal">
      <Header />
      <Navbar 
        categoriaActiva={categoriaActiva} 
        setCategoriaActiva={setCategoriaActiva} 
      />
      <main>
        <TarjetasServicios categoriaActiva={categoriaActiva} />
        <section id="contacto">
          <FormularioContacto onGuardarContacto={agregarContacto} />
        </section>
        <TablaRegistros contactos={contactos} />
      </main>
    </div>
  );
}