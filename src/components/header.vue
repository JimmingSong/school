<template>
	<div id="nav">
		<header id="header">
			<div class="logo">
				<img src="../assets/logo.png">
				<router-link to='/'>
					<span>欢迎来到校内转</span>
				</router-link>
			</div>
			<div class="login">
				<router-link to='/login'>{{per}}</router-link>
				<span class="logout" @click='logout()'>注销</span>
				<router-link to='/register'>免费注册</router-link>
				<!-- <span>免费注册</span> -->
			</div>
			<div class="order">
				<span class="myorder">我的订单<i class="fa fa-angle-down"></i></span>
				<span class="myorder schoollife">我的校生活<i class="fa fa-angle-down"></i></span>
				<span class="myorder customer">客户服务<i class="fa fa-angle-down"></i></span>
			</div>
		</header>
	</div>
</template>
<script>
	import Vue from 'vue'
	import Vuex from 'vuex'
	Vue.use(Vuex)
	export default {
		// data(){
		// 	return {
		// 		per:'请登录'
		// 	}
		// },
		computed:{
			per(){
				console.log(document.cookie)
				let per = document.cookie.split('=')[0];
				let val = document.cookie.split("=")[1];
				if(val && this.person){
					return "欢迎,"+val;
				}else{
					return this.person
				}
			}
		},
		methods:{
			logout(){
				document.cookie=document.cookie.split('=')[0]+'=';
				this.person = '您好!请登录'
			}
		},
		props:{
			person:{
				type:String,
				default:'您好!请登录'
			}
		},
		// watch:{
		// 	"per"
		// }
	}
</script>
<style>
	#nav{
		width: 100%;
		height: 35px;
		background: #e3e4e5;
		padding:3px  0;
	}
	.logout{
		margin-left: .5rem
	}
	#header {
		width: 1200px;
		margin: 0 auto;
		height: 100%;
		display: flex;
		cursor: default;
	}
	#header div{
		height: 100%;
		display: flex;
		align-items:center;
	}
	.logo{
		justify-content: space-between;
		line-height: 35px;
		width: 15%;
	}
	.logo img{
		height:100%;
		background: #35495e;
		border-radius: 50%;
		animation: imgrotate 2s linear infinite;
	}
	.logo img:hover{
		animation-play-state: paused;
	}
	@keyframes imgrotate{
		from {transform: rotate(0deg)}
		to{transform: rotate(360deg)};
	}
	.login {
		width: 50%;
		justify-content: flex-end;
		padding-right: 5px;
	}
	.login>a{
		margin-left: 2%
	}
	.login>a:last-child{
		color: #f00;
	}
	.order{
		width: 25%;
		justify-content: space-around;
	}
	.myorder:hover {
		color: #f00;
	}
	.myorder i {
		transition: all 200ms linear;
	}
	.myorder:hover i{
			transform: rotate(180deg);
	}
</style>