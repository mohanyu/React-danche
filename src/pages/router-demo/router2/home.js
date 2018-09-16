import React from 'react';
import { HashRouter, Route, Link, } from 'react-router-dom';


export default class Home extends React.Component {
    
    render() {

        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/main">跳转到Home1</Link>
                        </li>
                        <li>
                            <Link to="/about">跳转到About2</Link>
                        </li>
                        <li>
                            <Link to="/topic">跳转到topics</Link>
                        </li>
                    </ul>
                    <hr />
                    {this.props.children}



                </div>

            </HashRouter>

        )
        
    }
}