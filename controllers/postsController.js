const postsModel = require('../modules/postsModel.js')

module.exports.getPostList = (req,res)=>{
    let params = req.query;
    postsModel.getPostList(params,(err,result)=>{
        if(err) return res.json({
            "code":1,
            "msg":"获取文章失败"
        })
        res.json({
            "code":0,
            "msg":"获取文章成功",
            "data":result
        })
    })
}