function handleClick() {
    console.log("clicked");
}


function Clicker() {
    return(
        <div>
            <p>Click The Button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )    
}


export default Clicker;