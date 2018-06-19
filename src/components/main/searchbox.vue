<style type="text/css">
	.search{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150px;
		/*flex-direction: column;*/
	}
	.search>div{
		width: 50%;
	}
	.search_input{
		background: #3ea27b;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		color: #fff;
		cursor: default;
		height: 35px;
	}
	.search_input input{
		width: 82%;
		height: 85%;
		font-size: 1rem;
		border-radius: 3px;
		border: none;
		background: #d5efe5
	}
	.search_input i {
		display: inline-block;
		width: 18%;
		text-align: center;
	}
	.searchbox:hover{
		color:#69efba;
	}
	.search_list{
		/*display: inline-block;*/
		margin-top: 5px;
	}
	.search_list>span{
		margin: 0 3px;
		padding: 3px;
		background: #69efba;
		border-radius: 10px;
	}
</style>
<template>
	<div class="search">
		<div>
			<div class="search_input">
				<input type="text" tabindex="1">
				<i>搜索</i>
			</div>
			<div class="search_list">
				<span v-for='item in adList'>{{item}}</span>
			</div>	
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				adList:['电动车','懒人桌']
			}
		}
	}
</script>