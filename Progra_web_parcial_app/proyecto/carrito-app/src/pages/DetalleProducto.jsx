import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      const response = await axios.get(`https://parcial.nucleoslabs.com.co/api/v1/productos/listar/${id}`);
      setProducto(response.data);
    };
    fetchProducto();
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="productos">
      <img src={producto.imagen} alt={producto.nombre} className="productos" />
      <h2 className="text-3xl font-bold">{producto.nombre}</h2>
      <p className="text-lg">{producto.descripcion}</p>
      <p className="text-2xl font-bold">${producto.precio}</p>
    </div>
  );
};