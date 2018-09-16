import React from 'react';
import { HashRouter as Router, Route, Switch,} from "react-router-dom";

import Topics from '../router1/topic';
import About from '../router1/about';
import Home from "./home";
import Info from './info';

import Main from './main';
import NoMatch from './NoMatch';


export default class IRouter extends React.Component{

    render(){

        return(
            <Router>
                    <Home>
                        <Switch>
                            <Route  path="/main" 
                            // 嵌套路由使用render
                                render={()=>
                                    <Main>
                                        <Route path="/main/:value" component={Info}></Route>
                                    </Main>
                                
                                }>
                            </Route>
                            <Route path="/about" component={About}></Route>
                            <Route path="/topic" component={Topics}></Route>
                            <Route component={NoMatch}></Route>

                        </Switch>

                        
                    </Home>
            </Router>

        )
    }
}