import { useState } from "react";

function generateGameBoard() {
    console.log("Making the initial game board")
    return Array(5000);
}

 function Dumbo()
 {
    const [board, setBoard] = useState(generateGameBoard());
    // const [board, setBoard] = useState(generateGameBoard); intead you should use
    return <button>Click me to change state</button>
}




 export default Dumbo;