import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/CustomView'
import AuthLayout from './AuthLayout'
import { login } from '../../utils/apiServices'

const Login = () => {
	const [form, setForm] = useState({
		email: 'kamal@gmsail.com',
		password: 'password',
	})
	const inputFields = [
		{ label: 'Email', value: form?.email, name: 'email' },
		{ label: 'Password', value: form?.password, name: 'password', type: 'password' },
	]

	const handleLogin = () => {
		login(form)
	}
	return (
		<View
			style={
				{
					// flex: 1,
					// alignContent: 'center',
					// alignItems: 'center',
					// height: '100%',
				}
			}
		>
			<AuthLayout
				form={form}
				setForm={setForm}
				inputFields={inputFields}
				heading='Login'
				btnText='Login'
				handleSubmit={handleLogin}
			/>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({})
