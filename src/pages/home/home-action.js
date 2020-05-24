import * as ActionTypes from './home-constant';

export const getNewsList = () => {
    return function(dispatch){
        let myHeaders = new Headers();
            myHeaders.append("Cookie", "__cfduid=d843cbccb7dc049b0b23965e623785b0b1590258632");
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
        fetch(`https://hn.algolia.com/api/v1/search?page=1`, requestOptions)
        .then(response => response.text())
        .then(data => {
            
            dispatch({
                type:ActionTypes.NAV_NEWSLIST,
                data:JSON.parse(data).hits
            })
        })
        .catch(error => console.log('error', error));

    }
}

export const getPagination = (num) => {
    return function(dispatch){
        let myHeaders = new Headers();
            myHeaders.append("Cookie", "__cfduid=d843cbccb7dc049b0b23965e623785b0b1590258632");
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
        fetch(`https://hn.algolia.com/api/v1/search?page=${num}`, requestOptions)
        .then(response => response.text())
        .then(data => {
            dispatch({
                type:ActionTypes.NAV_NEWSLIST,
                data:JSON.parse(data).hits
            })
        })
        .catch(error => console.log('error', error));

    }
}

export const voteDataUpdate = (voteNum,objectID,newsList) =>{
    return function(dispatch){
          dispatch({
            type:ActionTypes.NAV_VOTEUPDATE,
            data:newsList,
            voteNum:voteNum,
            objectID:objectID
        })

    }
}
let arrayStore = [];
export const hiseNews = (objectID,newsList) => {
    return function(dispatch){
          if(localStorage.idArray){
            arrayStore.push(...JSON.parse(localStorage.idArray));
          }
          arrayStore.push(objectID);
          arrayStore = [...new Set(arrayStore)];
          localStorage.setItem('idArray',JSON.stringify(arrayStore));
          dispatch({
            type:ActionTypes.NAV_NEWSHIDE,
            data:newsList,
            objectID:objectID
        })

    }
}
