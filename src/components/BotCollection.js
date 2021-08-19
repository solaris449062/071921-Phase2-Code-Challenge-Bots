import React from "react";
import BotSpecs from "./BotSpecs";
import BotCard from "./BotCard";

function BotCollection({bots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => <BotCard bot={bot}/>)}
      </div>
    </div>
  );
}

export default BotCollection;
