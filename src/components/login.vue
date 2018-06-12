<template>
	<div class="con">
		<headers></headers>
		<div class='register-content'>
			<el-form class="r-form" :model="form" ref="form" label-width="80px">
				<p class="r-title">登录</p>
			    <el-form-item>
			    	<span class="r-des">昵称或邮箱</span>
			        <el-input class='e-input' v-model="form.name" placeholder="请输入昵称或邮箱"></el-input>
			    </el-form-item>
			    <el-form-item>
			    		<span class="r-des">密码</span>
			        	<el-input class='e-input' v-model="form.pwd" placeholder="请输入密码"></el-input>
			    </el-form-item>
			    <el-form-item class='r-btn'>
			        <el-button type="primary" @click="onSubmit()">立即登录</el-button>
			        	<router-link class="forget-pwd" to="/register">
				        	免费注册
			        	</router-link>
			    </el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import headers from './header'
	import Vuex from 'vuex'
	import util from '../util/fun.js'
	export default {
		data(){
			return {
				form:{
					name:"",
					pwd:""
				}
			}
		},
		methods:{
			onSubmit:function(){
				let a = util.ajaxGet()
				console.log(a);
				// this.search();
			}
		},
		// methods:{
		// 	...Vuex.mapActions(['search'])
		// },
		computed:{
			...Vuex.mapState(['product'])
		},
		components:{headers}
	}
</script>
<style>
	.con .e-input{
		width: 50%
	}
</style>