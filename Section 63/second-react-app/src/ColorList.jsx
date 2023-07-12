
function ColorList({colors}) {
    // const elements = [<p>Hello</p>, <h1>Bye!</h1>,<input type="password" />]
    const list = colors.map(color => <li>{color}</li>);

    return (
        <div>
            <p>Color List</p>
            <ul>{list}</ul>
        </div>
    );
}


export default ColorList;