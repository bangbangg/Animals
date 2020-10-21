import React from 'react';
import {useSelector} from 'react-redux';
import {useParams,useHistory} from 'react-router-dom';

export const AnimalInfo = () => {

  const animals = useSelector(state=>state.animals);
  console.log(animals)
  const history = useHistory();
  function goBackHandle() {
    history.goBack();
  }

  let id = useParams()
  const current_animal = animals.find(animal => animal.id === id.id)
 

  return (
    <div className="card card_width" >
      <img src="https://wikipet.ru/wp-content/uploads/2018/10/1539241377_1-1280x720.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{current_animal.nickname}</h5>
        <p className="card-text">Он весит : {current_animal.height}, его рост : {current_animal.height}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{current_animal.type}</li>
        <li className="list-group-item">Породы : {current_animal.breed}</li>
        <li className="list-group-item">Его возраст : {current_animal.age}</li>
     </ul>
      <div className="card-body">
        <button className="btn btn-primary"  onClick = {goBackHandle}>Go Back</button>
      </div>
    </div>
  )
}


