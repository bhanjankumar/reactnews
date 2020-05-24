import * as ActionTypes from './search-contant';

export const searchAction = (searchData) =>{
    return function(dispatch){
        fetch(`https://swapi.dev/api/planets/?search=${searchData}`, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            
        }).then(response => response.json())
        .then(data => {
            dispatch({
                type:ActionTypes.NAV_PLANET_LIST,
                data:data.results
            })
        })
    }
}

export const getPlanetlist = () => {
    return function(dispatch){
        fetch(`https://swapi.dev/api/planets/`, {
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            
        }).then(response => response.json())
        .then(data => {
            dispatch({
                type:ActionTypes.NAV_PLANET_LIST,
                data:data.results,
                loginSuccess:true
            })
        })
    }
}

export const homePage = () =>{
    return{
        type:ActionTypes.NAV_TO_HOME
    }
}
