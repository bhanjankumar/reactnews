import {connect} from 'react-redux';

import AppComponent from './components/app';
import * as action from './app-action';


const mapStateToProps = (state, currentProps) => {
   // const language = state.HomeReducer.language;
    return{
      //  language
    }
}

export default connect(mapStateToProps,action)(AppComponent);