import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/nomatch';


export default class IRouter extends React.Component{

    render(){

        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    {/* 子路由需要使用render嵌套 */}
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route component={NoMatch}/>
                        </Admin>
                         
                    }/>
                    <Route path="/order/detail" component={Login}/>

                </App>
                
                 


            </HashRouter>

        );
    }
}