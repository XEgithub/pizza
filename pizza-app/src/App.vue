<template>
  <div id="app">
    <div class="container">
        <Header></Header>
    </div>
    <div class="container">
        <router-view></router-view>
    </div>
    <!-- 路由复用 -->
    <div class="container">
        <div class="row">
            <div class="col-md-4">
              <router-view name="contact"></router-view>
            </div>
            <div class="col-md-4">
                <router-view name="express"></router-view>
              </div>
              <div class="col-md-4">
                  <router-view name="document"></router-view>
                </div>

        </div>
    </div>
   
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components:{
    Header

  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
