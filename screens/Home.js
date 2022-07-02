import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Container, Heading, HStack, Image, VStack } from 'native-base'

const ModuleCad = ({ image1, text1, image2, text2 }) => {
	return (
		<Box alignItems={'center'} width='full'>
			<HStack justifyContent='space-around' width={'100%'} alignItems='center'>
				<Box style={styles.card}>
					<Image
						source={{
							uri: image1,
						}}
						alt='ALT'
						size='xl'
						style={styles.image}
					/>
					<Heading size='sm' textAlign={'center'}>
						{text1}
					</Heading>
				</Box>
				{/* <Box></Box> */}
				{image2 && text2 && (
					<Box style={styles.card}>
						<Image
							source={{
								uri: image2,
							}}
							alt='ALT'
							size='xl'
						/>
						<Heading size='sm' textAlign={'center'}>
							{text2}
						</Heading>
					</Box>
				)}
			</HStack>
		</Box>
	)
}

const Home = () => {
	const cardData = [
		{
			image1:
				'https://img.freepik.com/free-vector/people-using-online-appointment-booking-app_74855-5556.jpg?w=2000',
			image2:
				'https://thumbs.dreamstime.com/b/search-engine-result-pag-vector-page-showing-results-query-web-concept-smartphone-192167587.jpg',
			text1: 'Appointment',
			text2: 'Queries',
			route1: '',
			route2: '',
		},
		// {
		// 	image1:
		// 		'https://img.freepik.com/free-vector/people-using-online-appointment-booking-app_74855-5556.jpg?w=2000',

		// 	text1: 'Appointment',
		// 	route1: '',
		// },
	]
	return (
		<Box w='full'>
			<VStack>
				{/* Detail Section */}
				<VStack
					height={'300'}
					bg='primary.800'
					padding={'5'}
					paddingTop='20'
					space={1}
					borderBottomRightRadius={20}
					borderBottomLeftRadius={20}
				>
					<Heading size='xl' style={styles.textWhite}>
						Hey Kamal
					</Heading>
					<Heading size='md' style={styles.textWhite}>
						Good Morning !
					</Heading>
					<Heading size='sm' style={styles.textWhite}>
						Hope You are Doing Well &#128512;
					</Heading>
				</VStack>
				<Box>
					{cardData.map((val, i) => {
						return <ModuleCad key={i} {...val} />
					})}
				</Box>
				{/*  Card Section */}
			</VStack>
		</Box>
	)
}

export default Home

const styles = StyleSheet.create({
	card: {
		padding: 10,
		paddingTop: 0,
		elevation: 20,
		shadowColor: '#52006A',
		backgroundColor: 'white',
		borderRadius: 25,
		width: 170,
		marginTop: 20,
	},
	image: {
		borderRadius: 25,
	},
	textWhite: {
		color: 'white',
	},
})
