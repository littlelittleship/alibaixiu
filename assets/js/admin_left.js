// 入口函数，这个需求是前端业务，
// 在点击文章下面的子目录，跳转时菜单依然是展开的
// 1.通过location.href获取路径，从而得到点击的元素
// 2.发现名称满足需求时，给元素class添加in，同时
// aria-expanded为true
// 注意jQuery的引入是在头部
$(function(){
    // 获取的路由名称是最后一个/之后，？之前的那部分，
    // 因为后面的业务可能会拼接参数，所以可能有？，
    // 注意是最后一个/
    var href = location.href;
    // 用？来判断是否有参数，用一个变量来接收
    var index = href.indexOf('?');
    // 如果没有参数，需要获取的是最后一个/后的内容，
    // 如果有参数，需要获取的是最后一个/之后，？之前的内容，
    // 注意substringlastIndexOf()，不需要取到/就要+1
    var routerName = ''
    if(index == -1){
        routerName = href.substring(href.lastIndexOf('/') + 1)
    }else{
        routerName = href.substring(href.lastIndexOf('/')+1,href.indexOf('?'))
    }
    
    // 获取想要操作的dom元素,ul
    var $menuPosts = $('#menu-posts')
    // 如果名称满足与ul下面呢三个li的id（一般是id，需要自己加，或自定义属性，名称与路径相同）其中之一相同，就添加相应的属性
    if(routerName == 'posts' || routerName=='post-add'||routerName=='categories'){
        $menuPosts.addClass('in')
        $menuPosts.attr('aria-expanded',true)
    }

    // 设置按钮也要这么设置
    var $menuSettings = $('#menu-settings')
    if(routerName == 'nav-menus' || routerName=='slides'||routerName=='settings'){
        $menuSettings.addClass('in')
        $menuSettings.attr('aria-expanded',true)
    }

    // 给被选中的li标签添加active样式
    // 排他法
    $('li').removeClass('active')
    $('#'+routerName).addClass('active')
})