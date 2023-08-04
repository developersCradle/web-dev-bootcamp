import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {

    const [isHappy, setIsHappy] = useState(true); // This represenest state of emoji, use state is needed to use inside component


    const toggeleIsHappy = () => setIsHappy(!isHappy);

    return (
        <div>
            <p className="Toggler" onClick={toggeleIsHappy}>
                {isHappy ? ":)" : ":("}
            </p>
        </div>
    );
}