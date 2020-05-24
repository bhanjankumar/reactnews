import * as ActionType from './search-contant';

const initialState = {
    loginSuccess:false
}

const getLoginCheck = (data) =>{
    console.log(data);
}

const SearchReducer = (state={...initialState},action) => {
    switch(action.type){
        case ActionType.NAV_PLANET_LIST:
            return{
                ...state,
               data:action.data,
            }
         case ActionType.NAV_TO_HOME:
            return{
                ...state,
               data:null,
               loginSuccess:false
            }
        case ActionType.NAV_LOGIN_SUCCESS:
            return{
                ...state,
                loginSuccess:true
            } 
        default:
            return state;
    }

};
export default SearchReducer;