import { Box } from 'native-base'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { login } from '../../utils/apiServices'
import AuthLayout from './AuthLayout'

const Login = ({ navigation }) => {
	const [form, setForm] = useState({
		email: 'kamal@gmsail.com',
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
			/>
		</Box>
	)
}

export default Login

const styles = StyleSheet.create({})
