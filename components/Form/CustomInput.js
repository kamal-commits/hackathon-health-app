import {
	Box,
	FormControl,
	Input,
	Stack,
	TextArea,
	WarningOutlineIcon,
} from 'native-base'
import { StyleSheet, View } from 'react-native'

const CustomInput = ({
	label,
	type = 'text',
	name,
	form,
	setForm,
	error,
	value,
	inputType = 'text',
}) => {
	// console.log({ type })
	const handleCHange = (e) => {
		setForm({ ...form, [name]: e.target.value })
	}
	return (
		<Box style={styles.container}>
			<FormControl isRequired>
				<Stack mx='4'>
					<FormControl.Label>{label}</FormControl.Label>
					{inputType === 'text' ? (
						<Input
							onChange={handleCHange}
							type={type}
							value={value}
							variant='underlined'
							size={'xl'}
						/>
					) : (
						<TextArea
							onChange={handleCHange}
							type={type}
							value={value}
							variant='underlined'
							size={'xl'}
						/>
					)}

					<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
						{error}
					</FormControl.ErrorMessage>
				</Stack>
			</FormControl>
		</Box>
	)
}

export default CustomInput

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
