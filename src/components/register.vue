<template>
	<div id="r-con">
		<headers></headers>
		<div id="register-content">
			<el-form class="r-form" :model="form" ref="form" label-width="80px">
				<p class="r-title">用户注册</p>
			    <el-form-item>
			    	<span>昵称</span>
			        <el-input v-model="form.name"></el-input>
			    </el-form-item>
			    <el-form-item>
			    	<span>性别</span>
			    	<el-switch v-model="form.gender" active-text="男" inactive-text="女">
			    	</el-switch>
			    </el-form-item>
			    <el-form-item>
			    	<span>联系电话</span>
			    	<el-input v-model='form.tel'></el-input>
			    </el-form-item>
			    <el-form-item>
			    	<span>年龄</span>
			        <el-input v-model="form.age" placeholder=""></el-input>
			    </el-form-item>
			    <el-form-item class="r-btn">
			        <el-button type="primary" @click="onSubmit">立即注册</el-button>
			        	<router-link to='/'>
			        		<el-button>取消注册</el-button>
			        	</router-link>
			    </el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	import headers from './header.vue'
	export default {
		data(){
			return {
				form:{
					name:"",
					gender:true,
					tel:"",
					age:""
				}
			}
		},
		methods:{
			onSubmit(){
				console.log(this.form)
			}
		},
		components:{headers}
	}
</script>
<style>
	#r-con{
			background: url('../../static/img/73.jpg') no-repeat;
			background-size: 100% 100%;
			height: 100vh;
			position: relative;
	}
	#register-content{
		width: 1200px;
		margin: 10px auto 0;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-65%);
	}
	.r-title{
		text-align: center;
		font-size: 1.5rem
	}
	.r-form{
		width: 60%;
		margin: 0 auto;
		background: rgba(0,0,0,0.6);
		color: #fff;
		padding: 8px;
	}
	.r-btn{
		text-align:center;
	}
	.el-input{
		width: 50%
	}
</style>