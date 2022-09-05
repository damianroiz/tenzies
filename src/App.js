import React from "react"
import Die from "./Die.js"


export default function App() {
  const [dice, setDice] = React.useState(allNewDice())


  function allNewDice() {
    const rands = [];
    for (let i = 0; i < 10; i++) {
    rands.push(Math.ceil(Math.random() * 6))
    }
    return rands
  }

  const diceElements = dice.map(die => <Die value={die} />) 
    
    return (
        <main >
          <div className="box-container">
                {diceElements}
          </div>
        </main>
    )
}

