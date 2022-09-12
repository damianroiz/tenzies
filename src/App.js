import React from "react"
import Die from "./Die.js"
import {nanoid} from "nanoid"
<<<<<<< HEAD
import Confetti from 'react-confetti'
=======
>>>>>>> da5375e5687b386d862073dfc9e2b2b3371f3539


export default function App() {
  
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
<<<<<<< HEAD
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSavemValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSavemValue) {
      setTenzies(true)
      console.log("You Won!")
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    } 
  }

  function allNewDice() {
    const newDie = [];
    for (let i = 0; i < 10; i++) {
    newDie.push(Math.ceil(Math.random() * 6))
    }
    return newDie
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
      die:
      generateNewDie()
    }))
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
      die :
      generateNewDie()
    }))
  }



  const diceElements = dice.map(die => (
    <Die
      key={die.id} 
      value={die} 
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}    
    />
=======
      console.log("Dice state changed")
  }, [dice])



  function generateNewDie() {
    return (
      {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      }
    )
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
    newDice.push(generateNewDie())
  }
  return newDice
  }

  function rollDice() {
  setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
      die :
      generateNewDie()
  }))
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ?
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const diceElements = dice.map(die => (
  <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
      />
>>>>>>> da5375e5687b386d862073dfc9e2b2b3371f3539
  )) 
    
    return (
        <main >
<<<<<<< HEAD
          {tenzies && <Confetti />}
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">
            {diceElements}
          </div>
          <button
                className="roll-dice"
                onClick={{rollDice}}>
                {tenzies ? "New Game" : "Roll" }  
          </button>
=======
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="box-container">
                {diceElements}
          </div>
          <button className="roll-dice" onClick={rollDice}>Roll</button>
>>>>>>> da5375e5687b386d862073dfc9e2b2b3371f3539
        </main>
    )
}

