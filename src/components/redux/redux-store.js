import {createStore, combineReducers, applyMiddleware} from 'redux'            ;
import profileReducer                 from './profile-reducer';
import dialogsReducer                 from './dialogs-reducer';
import usersReducer                   from './users-reducer'  ;
import authReducer                    from './auth-reducer'   ;
import thunkMiddleware                from 'redux-thunk'      ;
import { reducer as formReducer}      from 'react-form'       ;





let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage  : usersReducer,
    auth       : authReducer,
    form       : formReducer
});

let store    = createStore(reducers, applyMiddleware());

export default store;