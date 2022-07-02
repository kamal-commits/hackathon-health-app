import { Box } from 'native-base';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import AuthLayout from './AuthLayout';
const Login = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const inputFields = [
		{ label: 'Email', value: form?.email, name: 'email' },
		{
			label: 'Password',
			value: form?.password,
			name: 'password',
			type: 'password',
		},
	];
	return (
		<Box h={'full'} alignItems="center">
			<AuthLayout
				form={form}
				setForm={setForm}
				inputFields={inputFields}
				heading="Login"
				btnText="Login"
			/>
		</Box>
	);
};

export default Login;

const styles = StyleSheet.create({});
