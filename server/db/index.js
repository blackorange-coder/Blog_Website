const mysql = require('mysql');
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'blog_website',
})


// 向外共享 db 数据库连接对象
module.exports = db;