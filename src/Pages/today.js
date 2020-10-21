import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from "react-router-dom"



export const Today = () => {

  
  const animals = useSelector(state=>state.animals);
  console.log(animals)
  const day = (new Date()).toJSON().slice(0,10);
  const today = animals.filter(item=>item.date === day);
  today.sort((a,b) => a.time > b.time? 1 : -1)
  console.log(today);

  const history = useHistory();

  return (
    <div className = "today_container">
    <div className="list-group">
      {today.map((animal) => {
        return (
            <div className="list-group-item list-group-item-action active margin" key = {animal.id}>
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1" onClick = {()=>history.push(`/animalInfo${animal.id}`)}>Кличка животного : {animal.nickname} <button className = "btn btn-primary">*</button></h5>
            <small>Прием : {animal.time}</small>
            </div>
            <p className="mb-1"> Назначение : {animal.appointment}</p>
            <small>Лекарство : {animal.medicine}</small>
            </div>    
        )
       })
      }
    </div>
    </div>
  )
}


