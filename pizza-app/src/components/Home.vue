<template>
    <div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light bg-img">
                    <div class="col-md-8 p-lg-5 mx-auto my-5 bg-box">
                      <h1 class="display-4 font-weight-normal">欢迎大家品尝pizza！</h1>
                      <p class="lead font-weight-normal">这里有你非常喜欢的pizza！</p>
                  <!--     <a class="btn btn-outline-secondary" href="#">Coming soon</a> -->
                      <button @click="gotoMenu" type="button" class="btn btn-primary">Let's order!</button>
                    </div>
                  </div>
          
            
    </div>
    
</template>
<script>
    export default {
        methods:{
            gotoMenu(){
               // this.$router.go(-1);
               this.$router.replace('/menu');
            }
        }
    }
</script>
<style>
 .bg-img{
     background: url('../../src/assets/pizza.png');
     height:85vh;

 }
 .bg-box{
     margin-top:150px;
     background-color: beige;
     opacity: 0.8;
 }
</style>