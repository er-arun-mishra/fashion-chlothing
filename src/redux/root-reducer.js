import { combineReducers } from 'redux'; // combineReducers combines every reducers that we write in our code

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducers = combineReducers ({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducers);

// initially we use to export combinereducers but now we will be using the persist-storage.
// export default combineReducers ({
//     user: userReducer,
//     cart: cartReducer
// });
// Till now we have only written the root reducer and not brought the reducer into the state.