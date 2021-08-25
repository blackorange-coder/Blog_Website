const express = require('express');
const router = express.Router();


//导入获取时间处理函数的路由处理模块
const timeFunction = require('../router_handler/web_time');

//获取时间路由
router.get('/time', timeFunction.getTime);




module.exports = router;