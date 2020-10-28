import CartActionTypes from './cart.type';

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({ // this addItem gets an item that we just want to add in the array
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
export default toggleCartHidden;