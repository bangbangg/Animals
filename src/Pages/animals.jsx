import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const Animals = () => {

  const animals = useSelector((state) => state.animals);
  const history = useHistory();

  return (
    <div className="today_container">
      <h1 className = "heading">Наши питомцы</h1>
      <div className="list-group">
        {animals.map((animal) => {
          return (
            <div className="list-group-item list-group-item-action active margin" key={animal.id}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                  Кличка животного : {animal.nickname}
                </h5>
                <small>Возраст нашего питомца:{animal.age}</small>
              </div>
              <p className="mb-1">
                Тип животного : {animal.type}
              </p>
              <small>
                Порода : {animal.breed}
              </small>
              <div>
                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => history.push(`/animalInfo${animal.id}`)}
                >
                  Инфо
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
