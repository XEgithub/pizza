<template>
    <div>
        <!-- As a link -->


      <div class="container">
            <div class="row">
              <div class="col-md-4">
                    <nav class="navbar navbar-light bg-light box" >
                            <router-link class="navbar-brand" to="/news">历史订单</router-link>
                          </nav>
                          <nav class="navbar navbar-light bg-light box">
                                <router-link class="navbar-brand" to="/contact">联系我们</router-link>
                          </nav>
                          <nav class="navbar navbar-light bg-light box">
                                <router-link class="navbar-brand" to="/document">点餐文档</router-link>
                          </nav>
                          <nav class="navbar navbar-light bg-light box">
                                <router-link class="navbar-brand" to="/express">快递信息</router-link>
                          </nav>
              </div>
              <div class="col-md-8 box-right">
                    <router-view></router-view>
              </div>
            </div>
            
    </div>      
      
    </div>
</template>
<style>
.box{
    width:300px;
    height:50px;
    border:1px solid blanchedalmond;
    margin-top: 12px;
 /*   margin-top: 12px; */
    text-align: center;
}
.box-right{
    /* width:300px;
    height:50px;
    border:1px solid blanchedalmond; */
    margin-top: 12px;
  
}
</style>