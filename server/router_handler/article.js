const db = require('../db/index');


//1.获取文章列表的处理函数
exports.getArticleList = (req, res) => {
    // console.log(req);
    const sql = `select * from my_articles`;
    db.query(sql, function(err, results) {
        if (err) return res.cc(err);
        if (results.length <= 0) return res.cc('获取文章列表失败！');
        res.send({
            status: 0,
            messages: results
        })
    })
}


//2.文章详情页的处理函数
exports.getArticleLDetails = (req, res) => {
    // console.log(req);
    const sql = `select * from my_articles where id=?`;
    //采用链接拼接?id=1的形式发起请求
    db.query(sql, req.query.id, function(err, results) {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('获取文章列表失败！');
        res.send({
            status: 0,
            messages: results[0]
        })
    })
}


//3.文章编辑提交的处理函数
exports.commitArticle = (req, res) => {
    // console.log(req.body);
    const sql = `INSERT INTO my_articles set ?`;
    db.query(sql, [req.body], (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 0) return res.cc('已经存在');
        res.send({
            msg: 'commit success'
        })
    })

    // res.send({.title, req.body.date, req.body.content
    //     msg: 'commit success'
    // })

}


//4.文章删除处理函数
exports.deleteArticle = (req, res) => {
    // console.log(req.body.id);
    const sql = `delete from my_articles where id=?`;
    db.query(sql, req.body.id, function(err, results) {
        if (err) return res.cc(err);
        if (results.length === 0) return res.cc('已经删除');
        res.send({
            msg: 'delete success'
        })
    })
}