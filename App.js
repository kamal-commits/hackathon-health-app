import { StatusBar } from 'expo-status-bar'
import { Box, extendTheme, NativeBaseProvider, ScrollView } from 'native-base'
import AddQuery from './screens/AddQuery'
import Appointments from './screens/Appointments'
import Login from './screens/Authentication/Login'
import Signup from './screens/Authentication/Signup'
import BookAppointment from './screens/BookAppointment'
import Query from './screens/Query'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
export default function App() {
	const Stack = createNativeStackNavigator()

	let customHeader = (title) => {
		return {
			title: title,
			headerStyle: {
				backgroundColor: '#0957DE',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
		}
	}

	const theme = extendTheme({
		// backgroundColor: 'green.100',
		colors: {
			// Add new color
			primary: {
				10: '#0957DE',
				100: '#000000',
				200: '#ffffff',
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
			Input: {
				baseStyle: () => {
					return {
						_light: {
							color: 'primary.200',
						},
						_dark: {
							color: 'primary.100',
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
		},
	})
	return (
		<NavigationContainer>
			<NativeBaseProvider theme={theme}>
				<Stack.Navigator initialRouteName='Login'>
					<Stack.Screen
						name={'Login'}
						component={Login}
						options={customHeader('Login')}
					/>
					<Stack.Screen
						name='Signup'
						component={Signup}
						options={customHeader('Signup')}
					/>
					<Stack.Screen
						name='Appointments'
						component={Appointments}
						options={customHeader('Appointments')}
					/>
					<Stack.Screen
						name='Query'
						component={Query}
						options={customHeader('Query')}
					/>
					<Stack.Screen
						name='AddQuery'
						component={AddQuery}
						options={customHeader('AddQuery')}
					/>
					<Stack.Screen
						name='Home'
						component={Home}
						options={customHeader('Home')}
					/>
					{/* <Stack.Screen name='' component={} /> */}
				</Stack.Navigator>
				{/* <Box
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
				{/* <Appointments /> */}
				{/* <Signup /> */}
				{/* <Query /> */}
				{/* <Text>sdsadsad</Text> */}
				{/* <AddQuery /> */}
				{/* </ScrollView>
					<StatusBar style='auto' />
				// </Box> */}
			</NativeBaseProvider>
		</NavigationContainer>
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
