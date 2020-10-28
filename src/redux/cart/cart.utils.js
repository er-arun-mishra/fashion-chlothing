export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existing = cartItems.find(
        cartItem => cartItem.id == cartItemToAdd.id
    );
    if(existing){
        return cartItems.map(cartItem => (cartItem.id == cartItemToAdd.id)?
            { ...cartItem, quantity: cartItem.quantity+1} : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity:1}]
    // Line 11 will only execute for the very frst time the item is added to cart with the initial value of qujantity as 1.
    // For the next time the if(existing block will execute).
}