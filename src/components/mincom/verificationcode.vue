<template>
	<div>
		<el-tooltip content="验证码输入错误" placement="right" effect="dark">
			<el-input v-model="code" placeholder="请输入验证码"></el-input>
			<div>
				<span v-for='item in '></span>
			</div>
		</el-tooltip>
	</div>
</template>
<script>
	export default {
		props:{
			type:{
				type:Object,
				default:'1'
			}
		}
		data(){
			return {
				code:""
			}
		},
		computed:{
			codeString(){
				let word = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
				if(type === '1'){
					
				}
			}
		}
	}
</script>