import { FormControl, Input, Stack, WarningOutlineIcon } from 'native-base';
import { StyleSheet, View } from 'react-native';

const CustomInput = ({
	label,
	type = 'text',
	name,
	form,
	setForm,
	error,
	value,
}) => {
	const handleCHange = (e) => {
		setForm({ ...form, [name]: e });
	};
	return (
		<View style={styles.container}>
			<FormControl isRequired>
				<Stack mx="4">
					<FormControl.Label>{label}</FormControl.Label>
					<Input
						w={
							{
								// base: '75%',
								// md: '25%',
							}
						}
						onChangeText={handleCHange}
						type={type}
						value={value}
						// InputLeftElement={
						//   <Icon
						//     as={<MaterialIcons name="person" />}
						//     size={5}
						//     ml="2"
						//     color="muted.400"
						//   />
						// }
						// variant='rounded'
						size={'xl'}
						// placeholder={label}
						// style={styles.inputField}
					/>
					{/* <Input type="password" defaultValue="12345" placeholder="password" /> */}
					{/* <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText> */}
					<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
						{error}
					</FormControl.ErrorMessage>
				</Stack>
			</FormControl>
		</View>
	);
};

export default CustomInput;

const styles = StyleSheet.create({
	inputField: {
		color: 'black',
		// fontSize:
		fontWeight: 'bold',
	},
	container: {
		// marginTop: 15,
	},
});
