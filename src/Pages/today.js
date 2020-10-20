import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';


const Wrapper = styled.section`
  max-width: 100%;
  margin: auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  grid-auto-rows: 400px;
`;
export const Today = () => {

  
  const animals = useSelector(state=>state.animals);
  console.log(animals)
  const day = (new Date()).toJSON().slice(0,10);
  const today = animals.filter(item=>item.date === day);
  today.sort((a,b) => a.time > b.time? 1 : -1)
  console.log(today);

  return (
    <div>
    <Wrapper>
      {today.map((animal) => {
        return (
        <div>
          <p>{animal.nickname}</p>
          <p>{animal.appointment}</p>
          <p>{animal.medicine}</p>
          <p>{animal.time}</p>
        </div>
        )
       })
      }
    </Wrapper> 
    </div>
  )
}
