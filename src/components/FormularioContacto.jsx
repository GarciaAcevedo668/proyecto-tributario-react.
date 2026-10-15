import React, { useState } from 'react';

export default function FormularioContacto({ onGuardarContacto }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensajeTexto = formData.mensaje.toLowerCase();
    const urlActual = window.location.hash.toLowerCase();
    let moduloDetectado = 'General';

    if (urlActual.includes('impuest') || mensajeTexto.includes('impuest') || mensajeTexto.includes('tributar')) {
      moduloDetectado = 'Impuestos';
    } else if (urlActual.includes('finanz') || mensajeTexto.includes('finanz') || mensajeTexto.includes('contabl')) {
      moduloDetectado = 'Finanzas';
    } else if (urlActual.includes('laboral') || mensajeTexto.includes('laboral')) {
      moduloDetectado = 'Asesoría Laboral';
    } else if (urlActual.includes('prestacion') || mensajeTexto.includes('prestacion')) {
      moduloDetectado = 'Prestaciones Sociales';
    } else if (urlActual.includes('servic') || mensajeTexto.includes('servic')) {
      moduloDetectado = 'Servicios';
    }

    const nuevoContacto = {
      fecha: new Date().toLocaleString('es-CO'),
      modulo: moduloDetectado,
      nombre: formData.nombre,
      email: formData.email,
      mensaje: formData.mensaje
    };

    onGuardarContacto(nuevoContacto);
    setFormData({ nombre: '', email: '', mensaje: '' });
    alert('Información guardada con éxito.');
  };

  return (
    <section id="contacto" className="seccion-contacto">
      <h2 className="titulo-seccion">Contáctenos</h2>
      <div className="contenedor-formulario">
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label>Nombre completo:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Escriba su nombre"
              required
            />
          </div>
          <div className="campo">
            <label>Correo electrónico:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div className="campo">
            <label>¿En qué podemos ayudarle?</label>
            <textarea
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Describa brevemente su necesidad contable o financiera"
              required
            ></textarea>
          </div>
          <button type="submit" className="boton-enviar">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}