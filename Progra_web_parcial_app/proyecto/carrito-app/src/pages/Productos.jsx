import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await axios.get('https://parcial.nucleoslabs.com.co/api/v1/productos/listar');
      setProductos(response.data);
    };
    fetchProductos();
  }, []);

  return (
    <div className="productos">
      {productos.map((producto) => (
        <div key={producto._id} className="producto">
          <img src={producto} alt={producto} className="producto" />
          <h3 className="font-bold">{producto.nombre}</h3>
          <p>{producto.precio}</p>
        </div>
      ))}
    </div>
  );
};