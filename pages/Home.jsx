import { Box, Center } from 'native-base';
export default function Home() {
	return (
		<Center flex={1} px="3">
			<Box>
				<Center>
					<Image source={require('../assests/images/doctor.png')} />
				</Center>
			</Box>
		</Center>
	);
}
