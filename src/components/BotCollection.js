import React from "react";
import BotSpecs from "./BotSpecs";
import BotCard from "./BotCard";

function BotCollection({bots, onRecruit, onRelease}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => <BotCard key={bot.id} bot={bot} onRecruit={onRecruit} onRelease={onRelease}/>)}
      </div>
    </div>
  );
}

export default BotCollection;
