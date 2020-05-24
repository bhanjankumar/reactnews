import { browserHistory } from 'react-router';

import config from './router-config';

const routerMiddleware = store => next => action =>{
    if(config[action.type]){
        browserHistory.push(config[action.type]);
    }
    if(!action.type){
        console.log('invalid action')
    }
    next(action);
}
export default routerMiddleware;

