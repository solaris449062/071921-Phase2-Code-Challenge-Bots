import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";

function App() {

  const API = "http://localhost:8002/bots";
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(json => setBots(json))
  }, [])
  
  // console.log(bots);


  return (
    <div className="App">
      <BotsPage bots={bots}/>
    </div>
  );
}

export default App;
