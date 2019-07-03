const mysql = require('mysql')

let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'xiu',
    // 将dateStrings设置为true可把数据库中的时间转换成正常格式
    dateStrings:true
})

conn.connect()

exports.getPostList=(params,callback)=>{
    let sql = `select posts.id,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id,users.nickname,categories.name
    from posts
    inner join users on posts.user_id = users.id
    inner join categories on posts.category_id = categories.id
    limit ${(params.pagenum-1)*params.pagesize},${params.pagesize}`
    conn.query(sql,(err,results)=>{
        if(err) return callback(err)
        callback(null,results)
    })
}