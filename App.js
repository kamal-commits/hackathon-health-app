import { extendTheme, NativeBaseProvider } from 'native-base';
import { StyleSheet } from 'react-native';
import Home from './pages/Home';

export default function App() {
	const theme = extendTheme({
		backgroundColor: 'green.100',
		colors: {
			// Add new color
			primary: {
				green: '#097969',
			},
			// Redefinig only one shade, rest of the color will remain same.
			amber: {
				400: '#d97706',
			},
		},
		config: {
			// Changing initialColorMode to 'dark'
			initialColorMode: 'dark',
		},
	});

	return (
		<NativeBaseProvider theme={theme}>
			<Home style={{ border: '1px solid red' }} />
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
