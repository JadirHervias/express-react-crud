import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info justify-content-between">
      <div className="container">
        <h1>
          <Link to={'/'} className="text-light">
            Listado de Productos
          </Link>
        </h1>
      </div>

      <Link
        to={'/add'}
        className="btn btn-warning nuevo-post d-block d-md-inline-block"
      >
        Agregar Producto &#43;
      </Link>
    </nav>
  );
};

export default Header;
