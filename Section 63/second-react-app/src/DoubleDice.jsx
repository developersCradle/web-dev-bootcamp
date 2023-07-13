
function DoubleDice()   {

    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;

    const styles = { color : num1 === num2 ? "green" : "red" };

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2> 
            {num1 === num2 ? <h3>You win!</h3> : null}
            <h3>You win!</h3>
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
        );
    }
    
    export default DoubleDice;



    