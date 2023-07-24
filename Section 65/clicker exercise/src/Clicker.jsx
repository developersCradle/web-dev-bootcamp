function Clicker({message, buttonText}) {
    
    const handleClick = () => {
        alert(message);
    }

    return (
        <>
            <button onClick={handleClick}>{buttonText}</button>
        </>
    )
}

export default Clicker;