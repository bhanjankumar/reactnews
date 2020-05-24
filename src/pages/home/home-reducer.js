import * as ActionType from './home-constant';

const initialState = {

}

const getFilterData = (data) => {
    let arrData = [];
    if(data){
        let i=1;
        data.forEach(el => {
            el.title!="" && el.title!=null ? arrData.push({x:i,y:el.points}):""
            i++;
        });
    }
   return  arrData
}

const getVoteFilter = (data,objectID,voteNum) =>{
    let arrData = [];
    if(data){
        data.forEach(el => {
            if(el.title!="" && el.title!=null){
                if(el.objectID==objectID){
                    el.points=voteNum;
                }
                arrData.push(el);
            }
        })
    }
    return arrData;
}

const getVoteHide = (data,objectID) => {
    let arrData = [];
    if(data){
        data.forEach(el => {
            if(el.title!="" && el.title!=null){
                if(el.objectID!==objectID){
                    arrData.push(el);
                }
            }
        })
    }
    return arrData;
}

const getLocalFilter = (data) => {
    let arrData = [];
if(localStorage.idArray){
    let localStorId = JSON.parse(localStorage.idArray);
    if(data){
        data.forEach(el => {
            if(el.title!="" && el.title!=null){
                if(!localStorId.includes(el.objectID)){
                    arrData.push(el);
                }
            }
        })
    }
}else{
    arrData = data;
}

    return arrData;
}


const HomeReducer = (state={...initialState},action) => {
    switch(action.type){
        case ActionType.NAV_NEWSLIST:
            return{
                ...state,
                data:getLocalFilter(action.data),
                filterLineChart:getFilterData(action.data)
            }
        case ActionType.NAV_VOTEUPDATE:
            return{
                ...state,
                data:getVoteFilter(action.data,action.objectID,action.voteNum),
                filterLineChart:getFilterData(action.data)
            }
        case ActionType.NAV_NEWSHIDE:
            return{
                ...state,
                data:getVoteHide(action.data,action.objectID),
                filterLineChart:getFilterData(action.data)
            }
        default:
            return state;
    }

};
export default HomeReducer;