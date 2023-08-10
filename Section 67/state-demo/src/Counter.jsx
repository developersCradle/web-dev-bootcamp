import { useState } from "react";
import Dumbo from "./Dumbo";


function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        // setCount(c => c + 1);// Not like this
        // setCount(c => c + 1);
        // setCount(c => c + 1);
    }

    return (
        <div>
            {/* <p>Count: {count}</p> */}
            {/* <button onClick={incrementCount}>+1</button> */}

            <Dumbo/>

        </div>
    );
}

export default Counter;