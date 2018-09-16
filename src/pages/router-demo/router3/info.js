import React from 'react';


export default class Info extends React.Component {
    
    render() {

        return (
                <div>
                    this is main Info,这里设置动态路由功能！
                    {/* 获取路由中的参数中的所有信息 */}
                    动态路由的值为：{this.props.match.params.value}
                </div>
        )
        
    }
}