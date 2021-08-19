import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({bots, onRecruit, onRelease, army}) {
  //start here with your code for step one

  return (
    <div>
      <YourBotArmy army={army} onRelease={onRelease}/>
      <BotCollection bots={bots} onRecruit={onRecruit} onRelease={onRelease}/>
    </div>
  )
}

export default BotsPage;
