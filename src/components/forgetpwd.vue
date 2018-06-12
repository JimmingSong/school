<template>
	<div class="con">
		<headers></headers>
		<div class='register-content'>
			<el-form class="r-form" :model="form" ref="form" label-width="80px">
				<p class="r-title">忘记密码</p>
			    <el-form-item>
			    	<span class="r-des">昵称或邮箱</span>
			        <el-input class='e-input' v-model="form.email" placeholder="请输入昵称或邮箱"></el-input>
			    </el-form-item>
			    <el-form-item>
			    		<span class="r-des">旧密码</span>
			        	<el-input class='e-input' v-model="form.oldpwd" placeholder="请输入旧密码"></el-input>
			    </el-form-item>
				<el-form-item>
				    <span class="r-des">新密码</span>
			        	<el-input class='e-input' v-model="form.newpwd" placeholder="请输入新密码"></el-input>
				</el-form-item>
				<el-form-item>
				    <span class="r-des">重新输入一遍</span>
			        	<el-input class='e-input' v-model="form.againpwd" placeholder="请再次输入新密码"></el-input>
				</el-form-item>
			    <el-form-item class='r-btn'>
			        <el-button type="primary" @click="onSubmit">确定</el-button>
			        	<router-link class="forget-pwd" to="/login">
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
					email:"",
					oldpwd:"",
					newpwd:"",
					againpwd:""
				}
			}
		},
		methods:{
			onSubmit(){

			}
		},
		components:{headers}
	}
</script>
<style>
	.el-input {
		width: 50%;
	}
</style>