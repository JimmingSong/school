// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import '../static/css/base.css'

Vue.use(element);
Vue.use(Vuex);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  computed:{
  	// ...mapState([msg])
  	...Vuex.mapState(['product'])

  },
  methods:{
  		...Vuex.mapActions(['search'])
  },
  created:function(){
  		this.search();
  		// console.log(this.product)
  },
  mounted:function(){
		// let xhr = new XMLHttpRequest();
		// xhr.onreadystatechange = function(){
		// 	if(xhr.readyState === 4 && xhr.status === 200){
		// 		console.log(xhr.responseText);
		// 	}
		// };
		// xhr.open('GET','/search',true);
		// xhr.send(null);
	}
})
