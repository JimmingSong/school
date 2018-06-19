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
			        <el-input type='password' class='e-input' v-model="form.pwd" placeholder="请输入密码"></el-input>
			    </el-form-item>
			    <el-form-item>
			        <span class="r-des">密码确认</span>
			        		<el-input type='password' @blur='pwdIsTrue($event)' class='e-input' v-model="form.pwd1" placeholder="请输入密码"></el-input>
			        	<span v-show='pwdTootip'>两次密码必须要一样！</span>
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
	import $ from 'jquery'
	export default {
		data(){
			return {
				form:{
					name:"",
					gender:1,
					tel:"",
					email:"",
					pwd:"",
					pwd1:""
				},
				pwdTootip:false
			}
		},
		computed:{
			
		},
		methods:{
			onSubmit(){
				let g = this.form.gender === 1?'male':'female';
				let obj = {
					"name":this.form.name,
					"g":g,
					"tel":this.form.tel,
					"email":this.form.email,
					"pwd":this.form.pwd
				}
				$.ajax({
					url: 'http://localhost:8088/register',
					type: 'post',
					data: obj,
				})
				.done(function(data) {
					console.log("success");
					console.log(data);
				})
				.fail(function() {
					console.log("error");
				})
			},
			pwdIsTrue(e){
				if(this.form.pwd === this.form.pwd1){
					// console.log(e);
					// $(e.target).removeClass('input-out');
					this.pwdTootip = false
				}else{
					$(e.target).addClass('input-out');
					this.pwdTootip = true
				}
			}
		},
		components:{headers}
	}
</script>
<style>
	.input-out{
		outline: 1px solid #f00;
	}
	.r-title{
		text-align: center;
		font-size: 1.5rem
	}
	.con .el-input{
		width: 50%;
	}
	.regi{
		width: 97%;
	}
	.to-login{
		margin-right: 10px;
	}
</style>