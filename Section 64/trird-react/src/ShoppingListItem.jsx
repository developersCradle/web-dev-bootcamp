//represent single item in shopping list
function ShoppingListItem({item, quantity, completed}) {
    const styles = {
            color: completed ? "gray" : "red",
            textDecoration : completed ? "line-through" : "none",
    };

    return (
            <li style={styles}>
                {item} - {quantity}  
            </li>
    );
}

export default ShoppingListItem;




// <li key={i.id} 
// style={{
//     color: i.completed ? "gray" : "red",
//     textDecoration : i.completed ? "line-through" : "none",
// }}
// >
// {i.item} - {i.quantity}
// </li>