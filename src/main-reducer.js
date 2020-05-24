import { combineReducers } from 'redux';
import home from './pages/home/home-reducer';

const combineReducer = combineReducers({
  home
});

const rootReducer = (state,action) => {
    if(action.type==='RESET_APP_STORE'){
        state = undefined;
    }
    return combineReducer(state,action);
}
export default rootReducer;