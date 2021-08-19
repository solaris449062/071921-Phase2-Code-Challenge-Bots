import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({army, onRelease}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {army.map(bot => <BotCard key={bot.id} bot={bot} onRelease={onRelease}/>)}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
