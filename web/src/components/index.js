import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import AxiosBase from '../config/index';
import Header from './layout/header';

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = useCallback(async () => {
    await AxiosBase.get('/courses')
      .then(({ data }) => {
        // console.log(data.data)
        setCourses(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const handleDelete = (id) => {
    console.log(id);

    AxiosBase.delete(`/courses/${id}`)
      .then((e) => {
        console.log(e);
        getCourses();
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Dificultad</th>
                  <th scope="col">Temas relacionados</th>
                  <th scope="col">Tiempo estimado</th>
                  <th scope="col">Costo</th>
                </tr>
              </thead>
              <tbody>
                {courses &&
                  courses.map((course, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{course.name}</td>
                      <td>{course.difficulty}</td>
                      <td>{course.relative_topic}</td>
                      <td>{course.estimated_time}</td>
                      <td>{course.cost}</td>
                      <td>
                        <Link
                          to={{
                            pathname: `/edit`,
                            state: {
                              course,
                            },
                          }}
                        >
                          <button className="btn btn-info mr-5">Editar</button>
                        </Link>

                        <button
                          className="btn btn-warning"
                          onClick={() => handleDelete(course._id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
