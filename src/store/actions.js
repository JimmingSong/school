//此文件可以包含异步操作
import util from '../util/fun'
// import 

let action = {
	increment(context){
		var val = context.state.number+1;
		context.commit('increment',val)
	},
	search(context){
		let data = util.ajaxGet();
		context.commit('search',data)
	}
}
export default action