//COMMON PATTERS FOR UPDATING RRAYS IN STATE

const shoppingCart = [
    { id : 1, product : "HDMI Cable", price : 4 },
    { id : 2, product : "Easy Bake Oven", price : 28 },
    { id : 3, product : "Peach Pie", price : 6.5 },
];

// Adding to an array
[...shoppingCart, { id : 4, product : "Cofee Mug", price : 2.99 }];

//Removing an element
shoppingCart.filter((item) => item.id !== 2);

// Updating all elements in an array
shoppingCart.map((item) => {
    return  {
        ...item, 
        product: item.product.toLocaleLowerCase(),
    }        ;
});

//Modifying particular element in an array 

shoppingCart.map((item) => {
    if (item.id === 3) {
        return {...item, price : 10.99 };
    } else {
        return item;
    }
});

