const express = require('express');
const router = express.Router();


//导入文章处理函数的路由处理模块
const articleFunction = require('../router_handler/article');

//文章列表路由
router.get('/list', articleFunction.getArticleList);

//文章详情页
router.get('/details', articleFunction.getArticleLDetails);



//=============以下需要身份认证======================
//发布文章
router.post('/commit/article', articleFunction.commitArticle);

//删除文章
router.post('/delete/article', articleFunction.deleteArticle);


module.exports = router;