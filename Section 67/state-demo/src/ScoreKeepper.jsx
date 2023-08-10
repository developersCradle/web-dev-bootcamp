import { useState } from "react";

function increaseP1Score() {
    setScores(scores);
    scores.p1Score += 1;
    console.log(scores);
    const newScores = {...scores, p1Score :scores.p1Score + 1 };
    setScores(newScores);
}

function ScoreKeepper() {

    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});

    return (
        <div>
            <p>Player 1: </p>
            <p>Player 2: </p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button>+1 Player 2</button>
        </div>
    );
}

export default ScoreKeepper;


