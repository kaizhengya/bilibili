import {
	request
} from './uits.js'
export function gethome() {
	return request({
		url: '/foo',
		params: {
			phone: 17554332556,
			key: '3cd60553beacb8e41791a6aa7e9e9150'
		}
	})
}
export function getmode(){
	return request({
		url:'./cont.js'
	})
}
