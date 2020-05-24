import React, { PureComponent } from 'react';

class SearchComponent extends PureComponent {
    constructor(props){
        super(props)
    }
    handleChangeData = (e) =>{
       let searchData =  e.target.value;
        this.props.searchAction(searchData);
    }
    render() {
        const {platestListData} = this.props;
       let  maxPopulation = Math.max.apply(null, platestListData && platestListData.map(function(data) {
            return data.population !='unknown'? data.population:'';
          }));
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Search</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-lg-offset-4">
                            <input type="search" onChange={this.handleChangeData} className="form-control" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="row">
                        {platestListData && platestListData.map((data, index) => (
                         data.population!='unknown' ? 
                        <div className="col-md-3">
                        <div className={data.population==maxPopulation ? 'planets-list boldBdr':'planets-list'} >
                           <div className="title">{data.name}</div>
                           <div className="gravity">{data.gravity}</div>
                           <div className="terrain">{data.terrain}</div>
                           <div className="population">{data.population}</div>
                        </div>
                        </div>
                        :''
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;