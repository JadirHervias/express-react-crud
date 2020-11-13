import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AxiosBase from '../config/index';
import Header from './layout/header';

const EditPage = ({ history }) => {
  const { state } = useLocation();

  const {
    name,
    difficulty,
    relative_topic,
    estimated_time,
    cost,
    _id,
  } = state.course;

  const [newCost, setCost] = useState(cost);
  const [newDifficulty, setDifficulty] = useState(difficulty);
  const [newName, setName] = useState(name);
  const [newRelativeTopic, setRelativeTopic] = useState(relative_topic);
  const [newEstimatedTime, setEstimatedTime] = useState(estimated_time);

  const handleEdit = (e) => {
    e.preventDefault();

    const newCourse = {
      name: newName,
      difficulty: newDifficulty,
      cost: parseFloat(newCost),
      relative_topic: newRelativeTopic,
      estimated_time: parseFloat(newEstimatedTime),
    };

    console.log(newCourse);

    AxiosBase.put(`/courses/${_id}`, newCourse)
      .then((e) => {
        console.log(e);
        history.push('/home');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <Header />
      <div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card p-5" style={{ borderRadius: '30px' }}>
                <form onSubmit={handleEdit}>
                  <label htmlFor="descripcion">Nombre del curso</label>
                  <input
                    id="name"
                    className="form-control mb-3"
                    name="name"
                    type="text"
                    value={newName}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <label htmlFor="descripcion">Nivel de dificultad</label>
                  <input
                    id="brand"
                    className="form-control mb-3"
                    name="difficulty"
                    type="text"
                    value={newDifficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    required
                  />

                  <label htmlFor="cost">Precio</label>
                  <input
                    id="cost"
                    className="form-control mb-3"
                    name="cost"
                    type="text"
                    value={newCost}
                    onChange={(e) => setCost(e.target.value)}
                    required
                  />

                  <label htmlFor="relativeTopic">Tema relacionado</label>
                  <input
                    id="relativeTopic"
                    className="form-control mb-3"
                    name="relativeTopic"
                    type="text"
                    value={newRelativeTopic}
                    onChange={(e) => setRelativeTopic(e.target.value)}
                    required
                  />

                  <label htmlFor="estimatedTime">
                    Tiempo estimado de duraci&oacute;n
                  </label>
                  <input
                    id="estimatedTime"
                    className="form-control mb-3"
                    name="estimatedTime"
                    type="number"
                    value={newEstimatedTime}
                    onChange={(e) => setEstimatedTime(e.target.value)}
                    required
                  />

                  <div className="text-center">
                    <button className="btn btn-info" type="submit">
                      {' '}
                      Guardar Cambios{' '}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
