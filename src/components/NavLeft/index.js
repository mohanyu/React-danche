import React from "react";
import "./index.less"
import menuList from "../../config/menuConfig";
import { Menu, Icon } from 'antd';



const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component {

    render() {


        return (

            <div>
                {/* logo */}
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>bicycle  MS</h1>
                </div>
                {/* 菜单列表 */}
                <Menu theme="dark">
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        {/* <MenuItemGroup title="Item 1"> */}
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        {/* </MenuItemGroup> */}
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}