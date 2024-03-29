import {
	AddIcon,
	Box,
	Button,
	Divider,
	Flex,
	Image,
	Input,
	Modal,
	Pressable,
	ScrollView,
	Text,
	VStack,
} from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import Status from '../components/Status'
import { API } from '../utils/API'
const data = [
	{
		title: 'Pain in heart',
		date: new Date(),
		active: true,

		comments: [
			{
				image:
					'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
				message: 'Get well soon',
				name: 'Dr Karan',
			},
			{
				image:
					'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
				message: 'Get well soon',
				name: 'Dr Karan',
			},
			{
				image:
					'https://img.freepik.com/free-vemodalVisible, setModalVisible, data ctor/doctor-character-background_1270-84.jpg?w=2000',
				message:
					"Lorem Ipsum is simply dummy text of the printing and typesetting                 industry. Lorem  Ipsum has  been the industry's standard dummy xt ever                since the 1500s, when an  nknown printer took a galley of type and                 scrambled it to make a type specimen book. It has survived not only                 five centuries, but also the leap into electronic typesetting,                 remaining essentially unchanged. It was popularised in the 1960s with                 the release of Letraset sheets containing Lorem Ipsum passages, and                 more recently with desktop publishing software like Aldus PageMaker                 including versions of Lorem Ipsum",
				name: 'Dr Karan',
			},
		],
	},
]

function CustomModal({ modalVisible, setModalVisible, data }) {
	const initialRef = React.useRef(null)
	const finalRef = React.useRef(null)

	return data ? (
		<>
			<Modal
				maxWidth={'full'}
				isOpen={modalVisible}
				onClose={() => setModalVisible(false)}
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
			>
				<Modal.Content>
					<Modal.CloseButton />
					<Modal.Header style={{ wordWrap: 'break-word' }}>
						{data.title}
					</Modal.Header>
					<ScrollView>
						<Modal.Body elevation={20} shadow='#fffff' height={'full'}>
							{data.comments.map((eachComment, key) => {
								return (
									<>
										<Box
											borderColor={'grey'}
											borderWidth={1}
											my={3}
											borderRadius={3}
											p={2}
											key={key}
										>
											<Flex alignItems={'center'} flexDirection={'row'}>
												<Image
													alt='Docimage'
													h={7}
													w={7}
													borderRadius={50}
													source={{
														uri: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000',
													}}
												></Image>
												<Text fontWeight={'bold'} color={'white'} mx={4}>
													{eachComment.name}
												</Text>
											</Flex>
											<Text
												marginTop={4}
												textAlign='justify'
												maxWidth={'full'}
												color={'white'}
											>
												"Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has been the industry's
												standard dummy xt ever since the 1500s, when an nknown
												printer took a galley of type and scrambled it to make a type
												specimen book. It has survived not only five centuries, but
												also the leap into electronic typesetting, remaining
												essentially unchanged. It was popularised in the 1960s with
												the release of Letraset sheets containing Lorem Ipsum
												passages, and more recently with desktop publishing software
												like Aldus PageMaker including versions of Lorem Ipsum
											</Text>
										</Box>
										<Divider />
									</>
								)
							})}
						</Modal.Body>
					</ScrollView>
					<Modal.Footer>
						<Button.Group space={2}>
							<Button
								variant='ghost'
								colorScheme='blueGray'
								onPress={() => {
									setModalVisible(false)
								}}
							>
								Cancel
							</Button>
							<Button
								onPress={() => {
									setModalVisible(false)
								}}
							>
								Save
							</Button>
						</Button.Group>
					</Modal.Footer>
				</Modal.Content>
			</Modal>
		</>
	) : (
		<></>
	)
}
function PreviousQuery({ setModal, setData }) {
	return (
		<Box
			// borderWidth={1}
			// borderColor={'black'}
			style={{
				shadowColor: '#52006A',
				backgroundColor: 'white',
				elevation: 20,
				padding: 25,
				paddingTop: 35,
			}}
			borderRadius={20}
			width={'full'}
			// p={4}
			height={135}
			alignContent={'center'}
			// shadow={4}
		>
			<Pressable
				onPress={() => {
					setModal(true)
					setData(data[0])
				}}
			>
				<Text fontSize={'md'} isTruncated fontWeight={'bold'}>
					{data[0].title}
				</Text>
				<Text>Comments : {data[0].comments.length}</Text>
				<Flex direction='row' justifyContent={'space-between'}>
					<Text>Date : 22/22/22</Text>
					<Status status='Pending' />
				</Flex>
			</Pressable>
		</Box>
	)
}
export default function Query({ navigation }) {
	const [query, setQuery] = React.useState('')
	const [data, setData] = React.useState(null)
	const [modalVisible, setModalVisible] = React.useState(false)

	const [allData, setAllData] = React.useState(false)
	console.log({ allData })

	const fetchData = async () => {
		try {
			const token = await AsyncStorage.getItem('token')
			console.log('token', token)
			let result = await axios.get(API.GET_QUERIES, {
				headers: {
					Authorization: `Bearer ${JSON.parse(token)}`,
				},
			})

			console.log({ result })
			setAllData(result.data.data)
		} catch (err) {
			console.log({ err: JSON.stringify(err) })
		}
	}
	React.useEffect(() => {
		fetchData()
	}, [])
	return (
		<Box
			nativeID='11111'
			paddingTop={5}
			flex={1}
			position={'relative'}
			px={1}
			w={'full'}
			// borderWidth={1}
		>
			<VStack h={'full'} space={3}>
				{/* <Input
					color={'black'}
					onChangeText={(e) => setQuery(e)}
					placeholder='Search...'
					value={query}
					w='100%'
				/> */}
				<Box
					width='100%'
					style={{ display: 'flex' }}
					px={2}
					py={3}
					justifyContent={'center'}
				>
					<PreviousQuery setModal={setModalVisible} setData={setData} />
				</Box>
				<CustomModal
					w={'full'}
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
					data={data}
				></CustomModal>
			</VStack>
			<Button
				position={'absolute'}
				bottom={10}
				right={15}
				borderRadius={30}
				// width='xs'
				width={60}
				height={60}
				onPress={() => navigation.navigate('AddQuery')}
			>
				<AddIcon color='white' />
			</Button>
		</Box>
	)
}
const styles = StyleSheet.create({
	root: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	docDescription: {
		marginTop: 15,
	},
	titleText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	subtitleText: {
		fontSize: 16,
		// fontWeight: 'bold',
		lineHeight: 25.5,
	},
	dateBox: {
		backgroundColor: '#a6f5ec',
		height: 80,
		width: 80,
		borderRadius: 20,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		// color: 'black',
		marginTop: 10,
	},
	activeTab: {
		backgroundColor: 'purple',
		color: 'white',
	},
})
