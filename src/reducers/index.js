import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

const reducers = {
    state: (state = {}) => state
}

const reducer = combineReducers(reducers);

export default reducer;
