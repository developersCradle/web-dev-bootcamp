import { useState } from "react";
import "./Toggler.css";

function ToggleCounter() {

    const [isHappy, setIsHappy] = useState(true); // This represenest state of emoji, use state is needed to use inside component
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 2);

    const toggeleIsHappy = () => setIsHappy(!isHappy);

    return (
        <div>
            <p className="Toggler" onClick={toggeleIsHappy}>
                {isHappy ? ":)" : ":("}
            </p>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    );
}

export default ToggleCounter; 