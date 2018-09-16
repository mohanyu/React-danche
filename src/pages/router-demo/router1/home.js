import React from 'react';
import { HashRouter, Route, Link, Switch} from 'react-router-dom';
import About from './about';
import Main from './main';
import Topics from './topic';

export default class Home extends React.Component {
    
    render() {

        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">跳转到Home</Link>
                        </li>
                        <li>
                            <Link to="/about">跳转到About</Link>
                        </li>
                        <li>
                            <Link to="/topic">跳转到topics</Link>
                        </li>
                    </ul>
                    <hr />
                    {/* switch 开关：它会知道第一个符合他的路由 */}
                    <Switch>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topics}></Route>
                    </Switch>

                </div>

            </HashRouter>

        )
        
    }
}