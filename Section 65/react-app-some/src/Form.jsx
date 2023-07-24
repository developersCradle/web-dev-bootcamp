
function handleFormSubmit(eventObject) { // Event handler will be provided with event submission. In vanilla Js or in React 
    eventObject.preventDefault();
    console.log("Submitted the form");    
}


function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}

export default Form;



