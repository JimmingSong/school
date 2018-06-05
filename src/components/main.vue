<template>
  <keep-alive>
    <div>
    <headers></headers>
    <span>校内转，循环利用</span>
    <router-link to='/register'>注册</router-link>
    <router-link to='/header'>
      click
    </router-link>
  </div>
  </keep-alive>
</template>

<script>
  import headers from './header.vue'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        value1: false,
        value2: true
      }
    },
    components:{headers}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
