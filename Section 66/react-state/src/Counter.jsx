import { useState } from "react";

function Counter(){

    const [num, setNum] = useState(5);
        
    const changeNum = () => {
        setNum(num + 1);
    }

    return (
        <div>
            <p>The count is: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}

export default Counter;


// Whitout state
// function Counter(){

//     let num = 0;


//     const incrementNum = () => {
//         num += 1;
//         console.log(num);
//     };

//     return (
//         <div>
//             <p>The count is: {num}</p>
//             <button onClick={incrementNum}>Increment</button>
//         </div>
//     );
// }
