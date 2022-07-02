import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import {
	Box,
	CheckIcon,
	FormControl,
	Icon,
	Input,
	Select,
	Stack,
	WarningOutlineIcon,
} from 'native-base'

const CustomSelect = ({
	label,
	type = 'text',
	name,
	form,
	setForm,
	error,
	options,
	value,
	disabled,
}) => {
	const handleCHange = (e) => {
		setForm({ ...form, [name]: e })
	}
	return (
		<Box style={styles.container}>
			<FormControl isRequired>
				<Stack mx='4'>
					<FormControl.Label>{label}</FormControl.Label>
					<Select
						selectedValue={value}
						// minWidth='200'
						accessibilityLabel={`Choose ${label}`}
						// placeholder='Choose Service'
						_selectedItem={{
							bg: 'teal.600',
							endIcon: <CheckIcon size='5' />,
						}}
						mt={1}
						onValueChange={handleCHange}
						variant='underlined'
						isDisabled={disabled}
					>
						{options.map((val) => (
							<Select.Item label={val} value={val} key={val} />
						))}
					</Select>
					<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
						{error}
					</FormControl.ErrorMessage>
				</Stack>
			</FormControl>
		</Box>
	)
}

export default CustomSelect

const styles = StyleSheet.create({
	inputField: {
		color: 'black',
		// fontSize:
		fontWeight: 'bold',
	},
	container: {
		// marginTop: 15,
	},
})
