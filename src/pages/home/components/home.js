import React,{PureComponent} from 'react';
import 'react-input-range/lib/css/index.css';
import Linechart from './line-chart';
let num =1,vote=1;
class HomeComponent extends PureComponent{
    constructor(){
        super();
        
    }
    componentDidMount(){
        this.props.getNewsList();
    }
    
    getPag = (nav) =>{
        if(nav=='next'){
            num++;
        }else{
            num--;
        }
        if(num < 1){
            let num =0;
            return num;
        }
        console.log(num);
       this.props.getPagination(num);
    }
    getDomainname(url) {
        let dataUrl = url;
        if(dataUrl)
        return dataUrl.split("/")[2];
    }
    getHour(timeStamp){
        return new Date(timeStamp).getHours();
    }
    upVotes = (d,objectID,newsList) => {
        let votData = d+vote;
        this.props.voteDataUpdate(votData,objectID,newsList);
    }
    hideNews = (objectID,newsList) =>{
        this.props.hiseNews(objectID,newsList);
    }
    
    render(){
        const {newsList,filterLineChart} = this.props;
        let i = 1;
        return(
    <div className="content">
  		<div id="hacker-news">
          <div className="container-fluid bgcolor">
          <div className="container">
                <div  className="row">
                    <div className="col-md-12 newslisthead" >
                        <div className="comment">comments</div>
                        <div className="votes">Votest</div>
                        <div className="upvotes">upvotes</div>
                        <div className="title">News Detail</div>
                    </div>
                </div>
          </div>
          </div>
            <div className="container">
                <div id="news" className="row">
                {newsList && newsList.map((data, index) => (
                    data.title !==null &&  data.title !==""  &&
                    (<div className="col-md-12 newslist"  key={index}>
                        <div className="comment">{data.num_comments}</div>
                        <div className="votes">{data.points}</div>
                        <div className="upvotes" onClick={()=>this.upVotes(data.points,data.objectID,newsList)}><i class="fa fa-play" aria-hidden="true"></i></div>
                        <div className="title"><a href={data.url} >{data.title}</a></div>
                       <div className="comments">({this.getDomainname(data.url)}) by {data.author} {this.getHour(data.created_at_i)} hour ago <span onClick={()=>this.hideNews(data.objectID,newsList)}>[hide]</span> </div>
                    </div>)
                ))}
                    
                </div>
            </div>
            <div className="container">
                <div id="news" className="row">
                    <div className="col-md-10">
                    </div>
                    <div className="col-md-2 pagination">
                        <a href="javascript:void(0)" onClick={()=>this.getPag('prev')}> Prev</a><a href="javascript:void(0)" onClick={()=>this.getPag('next')}>Next</a>
                    </div>
                </div>
            </div>
            <div className="container linechart-graph">
                <div className="rows">
                   <Linechart filterLineChart={filterLineChart} />
                </div>
            </div>
        </div>
  	</div>
        )
    }
}

export default HomeComponent;