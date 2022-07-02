import { Box } from 'native-base';
import { StyleSheet } from 'react-native';
const CustomView = ({ children, style = {} }) => {
	return (
		<Box
			borderWidth={2}
			borderColor={'red.500'}
			h={'full'}
			w={'full'}
			alignItems="center"
		>
			{children}
		</Box>
	);
};

export default CustomView;

const styles = StyleSheet.create({
	root: {
		width: '100%',
		// flex: 1,
	},
});
