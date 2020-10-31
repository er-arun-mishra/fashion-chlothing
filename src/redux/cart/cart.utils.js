export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existing = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    if(existing){
        return cartItems.map(cartItem => (cartItem.id === cartItemToAdd.id)?
            { ...cartItem, quantity: cartItem.quantity+1} : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity:1}]
    // Line 11 will only execute for the very frst time the item is added to cart with the initial value of qujantity as 1.
    // For the next time the if(existing block will execute).
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
// Remove the item if the cartItem quantity is 1 as decresing further will make the count of 0 and that makes no sense to keep that item in the cart
    if(existingCartItem.quantity === 1){
       return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id)
    };
//else decrease the count of the cartItem by 1 and return the items.
    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id?
        { ...cartItem, quantity:cartItem.quantity-1} : cartItem
    );

}