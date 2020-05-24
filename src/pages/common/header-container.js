import {connect} from 'react-redux';

import HeaderComponent from './components/header';
import * as action from './header-action';


const mapStateToProps = (state, currentProps) => {
    const loginSuccess = state.home && state.home.loginSuccess
    return{
        loginSuccess
    }
}

export default connect(mapStateToProps,action)(HeaderComponent);