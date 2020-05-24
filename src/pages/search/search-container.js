import {connect} from 'react-redux';

import SearchComponent from './components/search-component';
import * as action from './search-action';


const mapStateToProps = (state, currentProps) => {
    const platestListData = state.Search && state.Search.data;
    const loginSuccess = state.Search && state.Search.loginSuccess;
    const orderSt = state.Search && state.Search.order;
    return{
        platestListData,
        loginSuccess,
        orderSt
    }
}

export default connect(mapStateToProps,action)(SearchComponent);