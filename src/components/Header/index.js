import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Util from "../../utils/utils";
import axios from "../../axios";
export default class Header extends React.Component {
    componentWillMount () {
        this.setState({
            userName: '来到小黄车管理系统'
        });
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000);

        this.getWeatherAPIData();
    }

    getWeatherAPIData () {
        let city = "杭州";
        axios.jsonp({
            url:"http://api.map.baidu.com/telematics/v3/weather?location="+encodeURIComponent(city)+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2",
        }).then((res)=>{
            if(res.status == "success"){
                let data = res.results[0].weather_data[0];
                    this.setState({
                        nightPictureUrl: data.nightPictureUrl,
                        weather: data.weather,
                    
                })
            }


        })

    }
    

    render() {

        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>

                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        {/* <span class="date">2018-9-18</span> */}
                        <span class="date">{this.state.sysTime}</span>
                        <span class="weather-img">
                            <img src={this.state.nightPictureUrl} alt=""/>
                        </span>
                        <span class="weather-detail">
                            {this.state.weather}                        
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}