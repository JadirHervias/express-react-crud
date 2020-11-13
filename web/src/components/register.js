import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AxiosBase from '../config/index';

export const RegisterPage = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerAxios = (e) => {
    console.log('Eres una perra marco de mierda');

    e.preventDefault();
    const registerBody = {
      name: name,
      email: email,
      password: password,
    };
    console.log(registerBody);

    AxiosBase.post('/users/sign-up', registerBody).then((e) => {
      console.log(e);
      history.push('/');
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 mt-5">
          <div className="card" style={{ borderRadius: '30px' }}>
            <div class="card-body">
              <h3 className="mt-4 text-center">Registro</h3>
              <form onSubmit={registerAxios}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Nombres</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputName1"
                    aria-describedby="nameHelp"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Recordar
                  </label>
                </div>
                <div className="mb-3">
                  Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link>
                </div>
                <button type="submit" class="btn btn-info px-5">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
