import { Box } from 'native-base'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { login } from '../../utils/apiServices'
import { getToken } from '../../utils/constants'
import AuthLayout from './AuthLayout'

const Login = ({ navigation }) => {
	const [form, setForm] = useState({
		email: 'kamawla@gmail.com',
		password: 'password',
	})
	console.log('form value ', form)
	const inputFields = [
		{ label: 'Email', value: form?.email, name: 'email' },
		{
			label: 'Password',
			value: form?.password,
			name: 'password',
			type: 'password',
		},
	]
	// useEffect(async () => {
	// 	const token = await getToken()
	// 	if (getToken()) {
	// 		navigation.navigate('Home')
	// 	}
	// }, [getToken()])

	const handleLogin = () => {
		login(form, navigation.navigate('Home'))
	}
	return (
		<Box h={'full'} alignItems='center'>
			<AuthLayout
				form={form}
				setForm={setForm}
				inputFields={inputFields}
				heading='Login'
				btnText='Login'
				handleSubmit={handleLogin}
				navigation={() => navigation.navigate('Signup')}
			/>
		</Box>
	)
}

export default Login

const styles = StyleSheet.create({})
