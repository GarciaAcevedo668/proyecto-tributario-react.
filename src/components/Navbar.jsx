import React from 'react';

export default function Navbar({ categoriaActiva, setCategoriaActiva }) {
  const manejarClic = (categoria, e) => {
    e.preventDefault();
    if (categoria === 'contacto') {
      const seccionContacto = document.getElementById('contacto');
      if (seccionContacto) {
        seccionContacto.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCategoriaActiva(categoria);
    }
  };

  return (
    <nav className="navbar-horizontal">
      <ul>
        <li className={categoriaActiva === 'todos' ? 'activo' : ''}>
          <a href="#servicios" onClick={(e) => manejarClic('todos', e)}>Servicios</a>
        </li>
        <li className={categoriaActiva === 'impuestos' ? 'activo' : ''}>
          <a href="#impuestos" onClick={(e) => manejarClic('impuestos', e)}>Impuestos</a>
        </li>
        <li>
          <a href="#contacto" onClick={(e) => manejarClic('contacto', e)}>Contacto</a>
        </li>
        <li className={categoriaActiva === 'prestaciones' ? 'activo' : ''}>
          <a href="#prestaciones" onClick={(e) => manejarClic('prestaciones', e)}>Prestaciones Sociales</a>
        </li>
        <li className={categoriaActiva === 'laboral' ? 'activo' : ''}>
          <a href="#laboral" onClick={(e) => manejarClic('laboral', e)}>Asesoría Laboral</a>
        </li>
        <li className={categoriaActiva === 'finanzas' ? 'activo' : ''}>
          <a href="#finanzas" onClick={(e) => manejarClic('finanzas', e)}>Finanzas</a>
        </li>
      </ul>
    </nav>
  );
}