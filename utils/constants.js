import Doctor from '../assets/images/Login.jpg'
import { Box, useToast } from 'native-base'
export const COLORS = {
	PRIMARY: '#0957DE',
	SECONDARY: '',
}
export const IMAGES = {
	DOCTOR:
		'https://cdni.iconscout.com/illustration/free/thumb/doctor-2130490-1797869.png',
	USER: 'https://thumbs.dreamstime.com/z/man-stress-stressed-character-confused-frustration-depression-upset-guy-isolated-vector-illustration-flat-style-156004213.jpg',
	LOGIN:
		'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000',
}
// export const IMAGE

export const showToast = (message, type) => {
	console.log({ message, type })
	const toast = useToast()
	const renderColor = type && type === 'error' ? 'red.500' : 'emerald.500'
	toast.show(
		{ description: message }
		//   {
		// 	// render: () => {
		// 	// 	return (
		// 	// 		<Box bg={renderColor} px='2' py='1' rounded='sm' mb={5}>
		// 	// 			{message}
		// 	// 		</Box>
		// 	// 	)
		// 	// },
		// }
	)
}
