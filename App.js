import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import BookAppointment from './screens/BookAppointment'
import { NativeBaseProvider, Box, extendTheme, ScrollView } from 'native-base'
import Signup from './screens/Authentication/Signup'
import Login from './screens/Authentication/Login'
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
		<>
			<NativeBaseProvider theme={theme}>
				<Box safeArea style={styles.container}>
					<ScrollView width={'full'}>
						{/* <Text>Open up App.js to sstart working on your app!</Text> */}
						{/* <BookAppointment /> */}
						{/* <Signup /> */}
						<Login />
					</ScrollView>
					<StatusBar style='auto' />
				</Box>
			</NativeBaseProvider>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
