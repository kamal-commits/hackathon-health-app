import { Box, Button, Center, Container, Image, Text } from 'native-base';
export default function Home() {
	return (
		<Center flex={1} px="3">
			<Box
				w={'80%'}
				alignSelf={'center'}
				borderColor={'primary.green'}
				borderWidth="1px"
				borderRadius="2%"
				display="flex"
				flexDirection="column"
				justifyContent="space-evenly"
			>
				<Container>
					<Image
						alignSelf={'center'}
						size={['xs', 'sm', 'md', 'lg', 'xl', 'xl']}
						resizeMode="contain"
						source={require('../assests/images/doctor.png')}
					/>
					<Text fontSize={['sm', 'sm', 'xl']} mt="3" fontWeight="medium">
						NativeBase is a simple, modular and accessible component library
						that gives you building blocks to build you React applications.
					</Text>
				</Container>
				<Container>
					<Button rounded success>
						<Text>Success</Text>
					</Button>
				</Container>
			</Box>
		</Center>
	);
}
