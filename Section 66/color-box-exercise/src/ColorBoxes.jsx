import ColorBox from "./ColorBox";
import "./ColorBoxes.css"

function ColorBoxes({colors}) { //Kysy henkalta miksi pitää destructoroida
    
    const boxes = [];
        for (let i = 0; i < 25; i++) {
            boxes.push( <ColorBox colors={colors} /> );
        }    

    return (
        <div className="ColorBoxes">
            {boxes}
        </div>
    );
}

export default ColorBoxes;
