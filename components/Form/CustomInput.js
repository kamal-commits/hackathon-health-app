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
	const handleCHange = (e) => {
		setForm({ ...form, [name]: e })
	}
	return (
		<Box style={styles.container}>
			<FormControl isRequired>
				<Stack mx='4'>
					<FormControl.Label>{label}</FormControl.Label>
					{inputType === 'text' ? (
						<Input
							onChangeText={handleCHange}
							type={type}
							value={value}
							variant={label === 'Search' ? 'outline' : 'underlined'}
							size={'lg'}
							placeholder={label === 'Search' ? label : ''}
						/>
					) : (
						<TextArea
							onChangeText={handleCHange}
							type={type}
							value={value}
							variant='underlined'
							size={'lg'}
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
