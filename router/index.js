// 引入控制器模块
const pageController = require('../controllers/pageController.js')
// 引入express框架
const express = require('express')
// Router()构造函数创建的变量可以当做中间件来使用
const router = express.Router()


// 添加路由配置
// 前台页面
router.get('/',pageController.getIndexPage)
    .get('/detail',pageController.getDetailPage)
    .get('/list',pageController.getListPage)

    // 后台页面,给后台应用添加一个前缀admin
    // 其中admin默认是后台的index页面
    .get('/admin',pageController.getAdminIndexPage)

    .get('/admin/categories',pageController.getAdminCategoriesPage)

    .get('/admin/comments',pageController.getAdminCommentsPage)

    .get('/admin/login',pageController.getAdminLoginPage)

    .get('/admin/nav-menus',pageController.getAdminNavMenusPage)

    .get('/admin/password-reset',pageController.getAdminPasswordResetPage)

    .get('/admin/post-add',pageController.getAdminPostAddPage)
    
    .get('/admin/posts',pageController.getAdminPostsPage)

    .get('/admin/profile',pageController.getAdminProfilePage)

    .get('/admin/settings',pageController.getAdminSettingsPage)

    .get('/admin/slides',pageController.getAdminSlidesPage)
    
    .get('/admin/users',pageController.getAdminUsersPage)

module.exports = router
