import { StatusBar } from 'expo-status-bar'
import { Box, extendTheme, NativeBaseProvider, ScrollView } from 'native-base'
import AddQuery from './screens/AddQuery'
import Login from './screens/Authentication/Login'
import Query from './screens/Query'
export default function App() {
	const theme = extendTheme({
		// backgroundColor: 'green.100',
		colors: {
			// Add new color
			primary: {
				10: '#0957DE',
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
		components: {
			Text: {
				baseStyle: (props) => {
					const { colorScheme } = props

					return {
						_light: {
							color: colorScheme[500],
						},
						_dark: {
							color: 'amber.500',
						},

						// fontSize: 25,
					}
				},
			},
			Heading: {
				baseStyle: (props) => {
					const { colorScheme } = props

					return {
						_light: {
							color: colorScheme[500],
						},
						_dark: {
							color: 'amber.500',
						},

						// fontSize: 25,
					}
				},
			},
		},
	})
	return (
		<NativeBaseProvider theme={theme}>
			<Box
				flex={1}
				safeArea
				//  style={styles.container}
			>
				<ScrollView
					_contentContainerStyle={{ flex: 1 }}
					flex={1}
					width={'full'}
					h={'full'}
				>
					{/* <Text>Open up App.js to sstart working on your app!</Text> */}
					{/* <BookAppointment /> */}
					{/* <Login /> */}
					{/* <Query /> */}
					{/* <Text>sdsadsad</Text> */}
					<AddQuery />
				</ScrollView>
				<StatusBar style='auto' />
			</Box>
		</NativeBaseProvider>
	)
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		// backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });
