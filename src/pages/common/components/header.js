import React,{PureComponent} from 'react';


class HeaderComponent extends PureComponent{

    render(){
        return(
            <div>
            <header>
            <nav className="navbar-dark">
                <div className="text-center heading">Hackers News</div>
            </nav>

            </header>
            </div>
        )
    }
}

export default HeaderComponent;