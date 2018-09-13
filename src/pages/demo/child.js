import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            count: 0,
        }
    };
    componentWillMount() {
        console.log("componentWillMount");

    };
    componentDidMount() {
        console.log('componentDidMount');
    };
    //接收父组件的属性
    componentWillReceiveProps(newProps) {
        console.log("will props" + newProps.name);
    };

    shouldComponentUpdate() {
        console.log('should update');
        return true;
    };

    componentWillUpdate() {
        console.log("will update")
    }

    componentDidUpdate() {
        console.log("did update")
    }


    render () {
        return <div>
            <p>子组件生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}