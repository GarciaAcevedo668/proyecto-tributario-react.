import React from 'react';

export default function Header() {
  return (
    <header id="inicio">
      <div className="bloque-izquierdo">
        <img src="/imagen/contable.png" alt="Logo" width="100px" />
        <p className="lema">Siempre al día con tus datos</p>
      </div>
      <div className="Contabilidad">
        <h2>Contabilidad Finanzas</h2>
        <p className="texto-adelgazado">Herramientas Expertos</p>
      </div>
      <div className="frases-derecha">
        <p>Impuestos al día</p>
        <p>Su asesoría laboral</p>
      </div>
    </header>
  );
}