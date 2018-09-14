import React from 'react';
import Child from './child';
import './index.less';
import {Button} from 'antd';
// import 'antd/dist/antd.css';

export default class Life extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            count: 0,
        };
    };

    handleAdd=()=> {   //箭头函数绑定不需要 bind(this)
        this.setState({
            count: this.state.count + 1,
        });
    };

    handleClick(){
        this.setState({     //不使用箭头函数要bind（this）
            count: this.state.count + 1,
        });
    };


    render () {

        // render方法必须要有return，
        return <div className="content">

            <p>React生命周期</p>
            <Button onClick={this.handleAdd}>antd点击一下</Button>
            <button onClick = {this.handleAdd}>dianji</button>
            <button onClick = {this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>

            <Child name={this.state.count}></Child>

        </div>
    };

};