import JsonP from 'jsonp';


export default class Axios {
    static jsonp (options) {
       return  new Promise((resolve, reject)=>{
        //    Jsonp有三个参数 url、param、 回调函数（成功失败）
            JsonP(options.url,{
                param: "callback",
            },function(err,response) {
                // debugger;
                if(response.status == "success"){
                    resolve(response);
                }else{
                    reject(response.message);
                }

            })

        })

    }
}