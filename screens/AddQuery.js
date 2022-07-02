import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box } from 'native-base'
import AuthLayout from './Authentication/AuthLayout'
import CustomButton from '../components/Form/CustomButton'

const AddQuery = () => {
	const [form, setForm] = useState({
		query: '',
		visiblity: 'PRIVATE',
		doctorId: '',
		department: '',
	})
	console.log({ form })
	const inputFields = [
		{
			label: 'Visiblity',
			value: form?.visiblity,
			name: 'visiblity',
			options: ['PUBLIC', 'PRIVATE'],
		},
		{
			label: 'Department',
			value: form?.department,
			name: 'department',
			options: ['A', 'B', 'C'],
			visible: form?.visiblity === 'PRIVATE' ? 'true' : 'false',
		},
		{
			label: 'Doctor',
			value: form?.doctorId,
			name: 'doctorId',
			options: ['A', 'B', 'C'],
			visible: form?.visiblity === 'PRIVATE' && form?.department ? 'true' : 'false',
		},
		{ label: 'Query', value: form?.query, name: 'query', inputType: 'textArea' },
	]

	// if (form?.visiblity === 'PRIVATE') {
	// 	inputFields.splice(1, 0, {
	// 		label: 'Department',
	// 		value: form?.department,
	// 		name: 'department',
	// 		options: ['A', 'B', 'C'],
	// 	})
	// 	// if (form?.department) {
	// 	inputFields.splice(2, 0, {
	// 		label: 'Doctor',
	// 		value: form?.doctorId,
	// 		name: 'doctorId',
	// 		options: ['A', 'B', 'C'],
	// 		disabled: form?.department ? false : true,
	// 	})
	// 	// }
	// }

	return (
		<Box>
			<AuthLayout
				heading='Add Query'
				btnText='Raise Query'
				inputFields={inputFields}
				setForm={setForm}
				form={form}
			/>
		</Box>
	)
}

export default AddQuery

const styles = StyleSheet.create({})
