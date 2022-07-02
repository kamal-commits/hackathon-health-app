import { API } from './API'
import Axios from 'axios'

import AsyncStorage from '@react-native-async-storage/async-storage'
import useHook from '../components/useHook'
export const signup = (dto = {}) => {
	//   const { showToast } = useHook();
	try {
		console.log({ dto })

		Axios.post(API.SIGNUP, dto, {
			// headers: {
			// 	'content-type': 'application/json',
			// 	Accept: 'application/json',
			// },
		})
			.then(async (res) => {
				const user = res?.data?.data
				const token = res?.data?.token
				console.log({ RES: user })
				// showToast("User Logged In !");
				AsyncStorage.setItem('user', JSON.stringify(user))
				AsyncStorage.setItem('token', JSON.stringify(token))
				const check = await AsyncStorage.getItem('token')
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
		console.log('login API')
		Axios.post(API.LOGIN, dto, {
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(async (res) => {
				const user = res?.data?.data
				const token = res?.data?.token
				console.log({ RES: res?.data?.data })
				AsyncStorage.setItem('user', JSON.stringify(user))
				AsyncStorage.setItem('token', JSON.stringify(token))
				const check = await AsyncStorage.getItem('token')
				console.log({ check })
				// showToast("User Logged In !");
			})
			.catch((err) => {
				console.log({ err: JSON.stringify(err.message) })
			})
	} catch (error) {
		console.log({ error })
	}
}
export const bookAppointment = (dto = {}) => {
	try {
		console.log({ dto })
		Axios.post(API.BOOK_APPOINTMENT, dto, {
			headers: {
				'content-type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => {
				console.log({ RES: res?.data?.data })
				// AsyncStorage.setItem('user', JSON.stringify(user))
				// AsyncStorage.setItem('token', JSON.stringify(token))
				// const check = AsyncStorage.getItem('token')
				// console.log({ check })
				showToast('Appointment Booked Successfully !')
			})
			.catch((err) => {
				console.log({ err: JSON.stringify(err) })
			})
	} catch (error) {
		console.log({ error })
	}
}
