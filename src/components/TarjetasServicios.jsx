// src/components/TarjetasServicios.jsx
import React, { useState } from 'react';
import { serviciosData } from '../data/serviciosData';

export default function TarjetasServicios({ categoriaActiva }) {
  const [modalActivo, setModalActivo] = useState(null);

  const tarjetasFiltradas = !categoriaActiva || categoriaActiva === 'todos'
    ? serviciosData
    : serviciosData.filter((s) => s.categoria === categoriaActiva);

  return (
    <div id="servicios-detalle" style={{ marginTop: '30px' }}>
      {/* Si estamos mostrando todos o la categoría de impuestos, colocamos la tarjeta de Retención fija arriba con ancho completo */}
      {(!categoriaActiva || categoriaActiva === 'todos' || categoriaActiva === 'impuestos') && (
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto 30px auto',
            border: '1px solid #cbd5e1',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
          }}
        >
          <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '12px 20px', fontWeight: 'bold', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📊</span> Resumen Retención en la Fuente 2026
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#0f172a', color: 'white', borderBottom: '2px solid #334155' }}>
                <th style={{ padding: '12px 20px', textAlign: 'left' }}>Concepto</th>
                <th style={{ padding: '12px 20px', textAlign: 'left' }}>Base (UVT / Pesos)</th>
                <th style={{ padding: '12px 20px', textAlign: 'left' }}>Tarifa %</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '12px 20px', color: '#1e293b' }}>Compras Generales</td>
                <td style={{ padding: '12px 20px', color: '#475569' }}>Desde 27 UVT</td>
                <td style={{ padding: '12px 20px', color: '#475569' }}>2.5% / 3.5%</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '12px 20px', color: '#1e293b' }}>Servicios en General</td>
                <td style={{ padding: '12px 20px', color: '#475569' }}>Desde 4 UVT</td>
                <td style={{ padding: '12px 20px', color: '#475569' }}>4.0% / 6.0%</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 20px', color: '#1e293b' }}>Honorarios y Comisiones</td>
                <td style={{ padding: '12px 20px', color: '#475569' }}>Desde 0 UVT</td>
                <td style={{ padding: '12px 20px', color: '#475569' }}>10% / 11%</td>
              </tr>
            </tbody>
          </table>
          <div style={{ padding: '12px 20px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
            <a
              href="/Tabla_Retencion_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0d9488',
                fontWeight: 'bold',
                textDecoration: 'underline',
                fontSize: '0.9rem'
              }}
            >
              📄 Ver Tarjeta de Retenciones Completa (PDF)
            </a>
          </div>
        </div>
      )}

      {/* Cuadrícula estándar para las demás tarjetas (excluyendo retención para que no se repita en el grid) */}
      <div className="grid-servicios">
        {tarjetasFiltradas
          .filter((srv) => srv.id !== 'retencion')
          .map((srv) => (
            <div
              key={srv.id}
              className="tarjeta-servicio"
              onClick={() => setModalActivo(srv)}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{srv.icono}</div>
              <h4>{srv.titulo}</h4>
              {srv.subtitulo && <p>{srv.subtitulo}</p>}
            </div>
          ))}
      </div>

      {/* Ventana Modal para las demás tarjetas */}
      {modalActivo && (
        <div className="modal-overlay" onClick={() => setModalActivo(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={() => setModalActivo(null)}>
              &times;
            </button>

            <div className="modal-cuerpo-scroll">
              <h3 style={{ marginBottom: '10px' }}>{modalActivo.contenidoModal.tituloPrincipal}</h3>
              <p style={{ marginBottom: '15px' }}>{modalActivo.contenidoModal.introduccion}</p>

              {modalActivo.contenidoModal.secciones?.map((sec, idx) => (
                <div
                  key={idx}
                  className="modal-seccion-caja"
                  style={{ borderLeftColor: sec.bordeColor || '#2563eb' }}
                >
                  <strong style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem' }}>
                    {sec.iconoSeccion && <span>{sec.iconoSeccion}</span>}
                    {sec.titulo}
                  </strong>
                  <p style={{ marginTop: '6px' }}>{sec.texto}</p>
                  {sec.lista && (
                    <ul style={{ paddingLeft: '20px', marginTop: '8px', fontSize: '0.9rem' }}>
                      {sec.lista.map((item, i) => (
                        <li key={i} style={{ marginBottom: '4px' }}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {modalActivo.contenidoModal.nota && (
                <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#64748b', marginTop: '10px' }}>
                  {modalActivo.contenidoModal.nota}
                </p>
              )}
            </div>

            {modalActivo.contenidoModal.cursos && modalActivo.contenidoModal.cursos.length > 0 && (
              <div style={{ marginTop: '15px', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
                {modalActivo.contenidoModal.cursos.map((curso, idx) => (
                  <button
                    key={idx}
                    className="btn-modal-accion"
                    style={{
                      marginBottom: '8px',
                      backgroundColor: curso.color,
                      color: 'white',
                      width: '100%',
                      padding: '12px',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    {curso.texto}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}