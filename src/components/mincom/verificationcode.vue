<template>
	<div>
		<el-tooltip content="验证码输入错误" placement="right" effect="dark">
			<el-input v-model="code" placeholder="请输入验证码"></el-input>
			<canvas>
				
			</canvas>
		</el-tooltip>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				code:""
			}
		},
		computed:{
			codeString(){
				let word = []
			}
		}
	}
</script>