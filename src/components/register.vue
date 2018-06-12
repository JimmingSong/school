<template>
	<div class="con">
		<headers></headers>
		<div class="register-content">
			<el-form class="r-form" :model="form" ref="form" label-width="80px">
				<p class="r-title">用户注册</p>
			    <el-form-item>
			    	<span class="r-des">昵称</span>
			        <el-input class='e-input' v-model="form.name" placeholder="请输入昵称"></el-input>
			    </el-form-item>
			    <el-form-item>
			    	<span class="r-des">性别</span>
			    		<el-radio v-model="form.gender" label="1" class='c-fff'>女</el-radio>
			    		<el-radio v-model="form.gender" label="2" class='c-fff'>男</el-radio>
			    </el-form-item>
			    <el-form-item>
			    	<span class="r-des">手机号</span>
			    	<el-input class='e-input' type="tel" v-model='form.tel' placeholder="请输入手机号"></el-input>
			    </el-form-item>
			    <el-form-item>
			        <span class="r-des">邮箱</span>
			        <el-input class='e-input' type="email" v-model="form.email" placeholder="请输入邮箱"></el-input>
			    </el-form-item>
			    <el-form-item>
			        <span class="r-des">密码</span>
			        <el-input class='e-input' v-model="form.pwd" placeholder="请输入密码"></el-input>
			    </el-form-item>
			    <el-form-item>
			        <span class="r-des">密码确认</span>
			        <el-input class='e-input' v-model="form.pwd1" placeholder="请输入密码"></el-input>
			    </el-form-item>
			    <el-form-item>
			        <span class="r-des">验证码</span>
			        
			    </el-form-item>
			    <el-form-item class='r-btn regi'>
			        <el-button type="primary" @click="onSubmit">立即注册</el-button>
			        <router-link class="forget-pwd" to="/forget">
				        	忘记密码
			        	</router-link>
			        	<router-link class='forget-pwd to-login' to='/login'>
			        		返回登录
			        	</router-link>
			    </el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import headers from './header'
	export default {
		data(){
			return {
				form:{
					name:"",
					gender:true,
					tel:"",
					email:"",
					pwd:"",
					pwd1:""
				}
			}
		},
		methods:{
			onSubmit(){
				console.log('注册')
			}
		},
		components:{headers}
	}
</script>
<style>
	.r-title{
		text-align: center;
		font-size: 1.5rem
	}
	.regi{
		width: 97%;
	}
	.to-login{
		margin-right: 10px;
	}
</style>