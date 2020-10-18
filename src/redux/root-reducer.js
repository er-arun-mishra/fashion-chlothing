import { combineReducers } from 'redux'; // combineReducers combines every reducers that we write in our code

import userReducer from './user/user.reducer';

export default combineReducers ({
    user: userReducer
});
// Till now we have only written the root reducer and not brought the reducer into the state.