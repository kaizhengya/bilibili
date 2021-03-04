import axios from 'axios'
export function request(config){
	const $http = axios.create({
		timeout:5000
	})
	return $http(config)
}