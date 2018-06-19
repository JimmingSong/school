<template>
  <keep-alive>
    <div>
    <headers></headers>
    <div class="content-box">
      <searchbox></searchbox>
    </div>
  </div>
  </keep-alive>
</template>

<script>
  import headers from './header.vue'
  import searchbox from './main/searchbox.vue'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        value1: false,
        value2: true,
        isshow:true
      }
    },
    methods:{
      transion(){
        this.isshow = !this.isshow
      }
    },
    components:{headers,searchbox}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .transition-box {
    margin-bottom: 10px;
    width: 200px;
    /*height: 100px;*/
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .content-box{
    width: 1200px;
    margin:0 auto;
    background: #d5efe5
  }
</style>
