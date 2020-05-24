import * as ActionType from './header-constant';

const initialState = {

}

const HeaderReducer = (state={...initialState},action) => {
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
export default HeaderReducer;