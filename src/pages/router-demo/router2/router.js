import React from 'react';
import { HashRouter as Router, Route,Link} from "react-router-dom";

import About from '../router1/about';
import Main from '../router1/main';
import Topics from '../router1/topic';
import Home from "./home";

export default class IRouter extends React.Component{

    render(){

        return(
            <Router>
                    <Home>
                        <Route  path="/main" 
                        // 嵌套路由使用render
                            render={()=>
                                <Main>
                                    <Route path="/main/a" component={About}></Route>
                                </Main>
                            
                            }>
                         </Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topics}></Route>
                    </Home>
            </Router>

        )
    }
}