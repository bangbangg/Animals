import React from 'react';

import {router} from "./Routing/Router"


export const App = () => {

  const data = JSON.parse(localStorage.getItem("authorize"));
  
  
  const routs = router(data)
  return (
    <div className="App">
      {routs}
    </div>
  );
}


