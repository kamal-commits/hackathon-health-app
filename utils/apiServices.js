import { API } from './API'
import Axios from 'axios'
import { showToast } from './constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const signup = (dto = {}) => {
	try {
		console.log({ dto })
		Axios.post(API.SIGNUP, dto, {
			// headers: {
			// 	'content-type': 'application/json',
			// 	Accept: 'application/json',
			// },
		})
			.then((res) => {
				const user = res?.data?.data
				const token = res?.data?.token
				console.log({ RES: user })
				showToast('User Logged In !')
				AsyncStorage.setItem('user', JSON.stringify(user))
				AsyncStorage.setItem('token', JSON.stringify(token))
				const check = AsyncStorage.getItem('token')
				console.log({ check })
			})
			.catch((err) => {
				console.log({ err: JSON.stringify(err) })
			})
	} catch (error) {
		console.log({ error })
	}
}

export const login = (dto = {}) => {
	try {
		console.log({ dto })
		Axios.post(API.LOGIN, dto, {
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => {
				console.log({ RES: res?.data?.data })
				AsyncStorage.setItem('user', JSON.stringify(user))
				AsyncStorage.setItem('token', JSON.stringify(token))
				const check = AsyncStorage.getItem('token')
				console.log({ check })
				showToast('User Logged In !')
			})
			.catch((err) => {
				console.log({ err: JSON.stringify(err) })
			})
	} catch (error) {
		console.log({ error })
	}
}
