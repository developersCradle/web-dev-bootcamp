import { useState } from 'react';
import './ColorBox.css'


function randomChoice(arr) { //Utility function
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function ColorBox({colors}) {

const [color, setColor] = useState(randomChoice(colors));
const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
    };
return <>
        <div 
        className="ColorBox" 
        style={{backgroundColor : color}}
        onClick={changeColor}
        >
            
        </div>
    </> 
}

export default ColorBox;