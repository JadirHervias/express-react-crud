import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosBase from '../config/index';

export const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = (e) => {
    e.preventDefault();

    const loginBody = {
      email,
      password,
    };

    AxiosBase.post('/auth/login', loginBody)
      .then((e) => {
        console.log(e);
        history.push('/home');
      })
      .catch((e) => {
        console.log(e.response.data);
        setError(e.response.data.err.message);
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 mt-5">
          <div
            className="card"
            style={{
              borderRadius: '30px',
              boxShadow: 'box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div class="card-body">
              <h3 className="mt-4 text-center">Inicio de Sesión</h3>
              <form onSubmit={login}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />{' '}
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Contrase&ntilde;a</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button type="submit" class="btn btn-info px-5">
                  Ingresar
                </button>
                {error ? (
                  <div className="my-3" style={{ color: '#FF0000' }}>
                    {error}
                  </div>
                ) : null}
                <div className="mb-3">
                  No tienes una cuenta?{' '}
                  <Link to="/register">Registrate aquí</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
