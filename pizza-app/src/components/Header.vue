<template>
    <header>
    
        <nav  class="navbar navbar-expand-lg navbar-light bg-light">
           
            <a class="navbar-brand">Pizza点餐系统</a>
            <div class="collapse navbar-collapse">

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active"><router-link tag="div" to="/" class="nav-link">主页</router-link></li>
                    <li class="nav-item active"><router-link to="/menu" class="nav-link">菜单</router-link></li>
                    <li class="nav-item active"><router-link to="/admin" class="nav-link">管理</router-link></li>
                    <li class="nav-item active"><router-link to="/about" class="nav-link">关于我们</router-link></li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><router-link to="/login" class="nav-link">登录</router-link></li>
                    <li class="nav-item active"><router-link to="/register" class="nav-link">注册</router-link></li>
                
                </ul>
            </div>
        </nav>
    </header>
</template>