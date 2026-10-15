import React from 'react';

export default function TablaRegistros({ contactos }) {
  return (
    <div style={{ marginTop: '30px', borderTop: '2px solid #ccc', paddingTop: '20px' }}>
      <h3>Mensajes Recibidos (Registros)</h3>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '8px' }}>Fecha</th>
            <th style={{ padding: '8px' }}>Módulo</th>
            <th style={{ padding: '8px' }}>Nombre</th>
            <th style={{ padding: '8px' }}>Correo</th>
            <th style={{ padding: '8px' }}>Mensaje</th>
          </tr>
        </thead>
        <tbody>
          {contactos.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ padding: '8px', textAlign: 'center' }}>
                No hay registros aún.
              </td>
            </tr>
          ) : (
            contactos.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.fecha}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.modulo}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.nombre}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.email}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.mensaje}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}