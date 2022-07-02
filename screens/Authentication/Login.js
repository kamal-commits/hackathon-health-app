import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/CustomView'
import AuthLayout from './AuthLayout'

const Login = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	})
	const inputFields = [
		{ label: 'Email', value: form?.email, name: 'email' },
		{ label: 'Password', value: form?.password, name: 'password' },
	]
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
			/>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({})
