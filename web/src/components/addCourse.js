import React, { useState } from 'react';
import AxiosBase from '../config/index';
import Header from './layout/header';

const AddPage = ({ history }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();

    const productos = {
      name: name,
      brand: brand,
      stock: parseInt(stock),
      price: parseFloat(precio),
    };
    console.log(productos);
    AxiosBase.post('/courses', productos)
      .then((e) => {
        console.log(e);
        history.push('/home');
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-5" style={{ borderRadius: '30px' }}>
              <form onSubmit={handleAdd}>
                <label htmlFor="descripcion">Nombre</label>
                <input
                  id="name"
                  className="form-control mb-3"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="descripcion">Marca</label>
                <input
                  id="brand"
                  className="form-control mb-3"
                  name="brand"
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />

                <label htmlFor="precio">Precio</label>
                <input
                  id="precio"
                  className="form-control mb-3"
                  name="precio"
                  type="text"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                  required
                />

                <label htmlFor="stock">Stock</label>
                <input
                  id="stock"
                  className="form-control mb-3"
                  name="stock"
                  type="text"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                />

                <div className="text-center">
                  <button className="btn btn-info" type="submit">
                    {' '}
                    Agregar Producto{' '}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
