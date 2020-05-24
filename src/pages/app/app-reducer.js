import * as ActionType from './app-constant';

const initialState = {

}

const AppReducer = (state={...initialState},action) => {
    switch(action.type){
        case ActionType.NAV_TO_HOME:
            return{
                ...state,
                data:action.data
            }
        default:
            return state;
    }

};
export default AppReducer;