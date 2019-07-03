$(function(){
    $.ajax({
        type:'get',
        url:'/getPostList',
        data:{
            pagenum:1,
            pagesize:2
        },
        dataType:'json',
        success:function(res){
            var htmlstr = template('postListTmp',res)
            $('tbody').html(htmlstr)
        }
    })
})