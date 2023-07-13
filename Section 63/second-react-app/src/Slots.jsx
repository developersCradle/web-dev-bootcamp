
function Slots({val1, val2, val3}){

    const youWin = val1 === val2 && val1 === val3;
    const styles = { color : youWin ? "green" : "red" };

    return (
        <div>
            <h1>
                {val1}  {val2}  {val3}
            </h1>
            <h2 style={styles}>
                {youWin ? "You win!": "you lose"}
            </h2>
            {youWin && <h3>Congrats!</h3> }
            {/* This will be rendered if short circuit is working */}
        </div>
    );
}


export default Slots;