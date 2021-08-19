import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";

function App() {

  const API = "http://localhost:8002/bots";
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([])


  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(json => {
      const updatedBots = json.map(bot => {
        return {...bot, recruited: false}
      });
      setBots(updatedBots)})
  }, [])
  
  // console.log(bots);

  function handleRecruit(recruitedBot) {
    const updatedBots = bots.map(bot => {
      if (recruitedBot.id === bot.id) return { ...bot, recruited: true};
      else return bot;  
    })
    setBots(updatedBots);
    const recruitedBots = bots.filter((bot) => bot.recruited)
    setArmy(recruitedBots);    
  }

  function handleRelease(releasedBot) {
    const updatedBots = bots.map(bot => {
      if (releasedBot.id === bot.id) return { ...bot, recruited: false};
      else return bot;
    })
    setBots(updatedBots);
    const recruitedBots = bots.filter((bot) => bot.recruited)
    setArmy(recruitedBots);    
  }

  return (
    <div className="App">
      <BotsPage bots={bots} army={army} onRecruit={handleRecruit} onRelease={handleRelease}/>
    </div>
  );
}

export default App;
