// import axios from 'axios'
export function getTodos () {
	// return request({
	// 	url: 'http://localhost:3000/todo',
	// 	method: 'get'
    // })
    return axios.get('/api/data') .then(res => { // 불러온 값을 Console에 뿌려줍니다. 
    console.log(res.data) })
}
export function createTodo (data) {
	// return request({
	// 	url: 'http://localhost:3000/todo',
	// 	method: 'post',
	// 	data   // param: param 과 같음 
	// })
}