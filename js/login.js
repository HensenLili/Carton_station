const config='http://47.106.96.222:2333'

function ajax(Url,data,type){
    let ran=new Promise(function(resolve,reject){
        $.ajax({
            url: config + Url,
            type: type,
            dataType: "JSON",
            data: data,
            crossDomain: true,
            xhrFields: {
                withCredentials: true // 携带跨域cookie
            },
            success: function (res) {
                resolve(res)
            },
            error:function(){
                reject('请求失败！')
            }
        })
    })
    return ran
}

ajax('/api/login',{username:'root',password:'root'},'post')
.then(res=>{
    console.log(res);
});