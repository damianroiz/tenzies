import React from "react"

export default function Die(props) {
    const styles = {
<<<<<<< HEAD
        backgroundColor: props.isHeld ?  "#59E391" : "#fff"
    }
    return (
        <div 
        className="die-face"
        style={styles}
        onClick={props.holdDice}
=======
        backgroundColor: props.isheld ? "#59E391" : "#fff"
    }

    return (
        <div 
            className="die-face"
            style={styles}
            onClick={props.holdDice}
>>>>>>> da5375e5687b386d862073dfc9e2b2b3371f3539
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}

