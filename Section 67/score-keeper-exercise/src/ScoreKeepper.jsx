import { useState } from "react";

function ScoreKeeper({numPlayers = 5, target=5}){

    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const incrementScore = (idx) => {
        setScores(prevScores => {
            const copy = [...prevScores];
            copy[idx] += 1;
            return copy;
        })
    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    }

    return(
        <div>
            <h1>Score Keeper</h1>
            <ul>
            {
                scores.map((score, idx) => {
                    return (
                    <li key={idx}>
                        Player{idx+1}: {score}
                        <button onClick={() => incrementScore(idx)}>+1</button>
                        { score >= target && "WINNER!"}

                    </li>
                    );
            })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default ScoreKeeper;


// emojis.map(e => 
//     <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize : "4rem"}}>
//     {e.emoji}
//     </span>
//     )