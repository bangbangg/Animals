import React from 'react';
import {useSelector} from 'react-redux';

import {router} from "./Routing/Router"



export const App = () => {


  const aut = useSelector(state=>state.isaut)
  
  const routs = router(aut)
  return (
    <div className="App">
      {routs}
    </div>
  );
}


