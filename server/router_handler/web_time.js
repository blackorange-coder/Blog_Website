const db = require('../db/index')

//网站运行时间路由处理函数
exports.getTime = (req, res) => {
    var date1 = 1629730003807;
    const date = new Date();
    var s = date.getTime();
    var s2 = s - date1;
    // console.log('网站运行了' + s2 + '毫秒');
    // console.log('网站运行了' + s2 / 1000 + '秒');
    // console.log('网站运行了' + s2 / 1000 / 60 + '分钟');
    var time = "网站运行了" + parseInt(s2 / 1000 / 60) + "分钟";
    res.send({
        time
    })
}