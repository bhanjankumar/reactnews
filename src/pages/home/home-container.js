import {connect} from 'react-redux';

import HomeComponent from './components/home';
import * as action from './home-action';


const mapStateToProps = (state, currentProps) => {
    const newsList = state.home.data;
    const filterLineChart = state.home.filterLineChart;
    return{
      newsList,
      filterLineChart
    }
}

export default connect(mapStateToProps,action)(HomeComponent);