<template>
	<div class="con">
		<headers :person='person'></headers>
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
	// import util from '../util'
	export default {
		data(){
			return {
				form:{
					name:"",
					pwd:""
				},
				person:'您好!请登录'
			}
		},
		methods:{
			onSubmit(){
				let obj = {
					"name": this.form.name,
					"pwd":this.form.pwd
				}
				let person = this.person;
				new Promise((resolve,reject)=>{
					$.ajax({
						url: 'http://localhost:8088/login',
						type: 'post',
						// dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
						data: obj,
						success:function(data){
							if(data.status){
								resolve(data)
							}else{
								reject()
							}
						},
						error:function(){
							reject(false)
						}
					}).then((data)=>{
						this.person = "欢迎"+data.per;
						document.cookie='per='+data.per;
						this.$router.push('/');
					}).catch(()=>{
						aler("用户不存在")
					})
				})
				
				// .done(function(data) {
				// 	console.log(this.person);
				// 	person = data.per;
				// 	console.log(data);
				// })
				// .fail(function() {
				// 	console.log("error");
				// })
				// .always(function() {
				// 	console.log("complete");
				// });
			},
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