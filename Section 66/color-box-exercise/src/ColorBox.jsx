import { useState } from 'react';
import './ColorBox.css'



function ColorBox({colors}) {

const [color, setColor] = useState("purple");
const changeColor = () => {
    const idx = Math.floor(Math.random() * colors.length);
    const randomColor = colors[idx];
    setColor(randomColor);
}
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