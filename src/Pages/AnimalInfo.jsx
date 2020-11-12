import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

export const AnimalInfo = () => {

  const animals = useSelector((state) => state.animals);
  const history = useHistory();

  function goBackHandle() {
    history.goBack();
  }

  let id = useParams();
  const currentAnimal = animals.find((animal) => animal.id === id.id);

  return (
    <div className="card card_width" >
      <img src={currentAnimal.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {currentAnimal.nickname}
        </h5>
        <p className="card-text">
          Он весит : {currentAnimal.weight}, его рост : {currentAnimal.height}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {currentAnimal.type}
        </li>
        <li className="list-group-item">
          Породы : {currentAnimal.breed}
        </li>
        <li className="list-group-item">
          Его возраст : {currentAnimal.age}
        </li>
      </ul>
      <div className="card-body">
        <button className="btn btn-primary" onClick={goBackHandle}>
          Go Back
        </button>
      </div>
    </div>
  );
};
