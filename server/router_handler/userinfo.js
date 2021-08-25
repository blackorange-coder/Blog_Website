const db = require('../db/index');




// 获取用户信息处理函数
exports.getUserInfo = (req, res) => {
    const sql = `select nickname from my_user where id=?`;
    db.query(sql, req.user.id, function(err, results) {
        // console.log(req.user);
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc("获取用户信息失败！");

        res.send({
            status: 0,
            nickname: results[0]
        })
    })
}