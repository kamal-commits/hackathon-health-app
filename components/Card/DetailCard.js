import { View } from 'react-native'
import React from 'react'
import {
	AddIcon,
	Box,
	Button,
	Flex,
	Input,
	Pressable,
	VStack,
	Text,
} from 'native-base'
import CustomInput from '../Form/CustomInput'
import CustomHeading from '../Form/CustomHeading'
import Status from '../Status'

const DetailCard = ({ children }) => {
	return (
		<Box position={'relative'} w={'full'}>
			{/* <CustomHeading heading='Appointments' /> */}

			<Box
				nativeID='11111'
				paddingTop={3}
				flex={1}
				// position={'relative'}
				px={1}
				w={'full'}
				// borderWidth={1}
			>
				<VStack space={3}>
					{/* <CustomInput label={'Search'} /> */}

					<Box
						// borderWidth={1}
						// borderColor={'black'}
						style={{
							shadowColor: '#52006A',
							backgroundColor: 'white',
							elevation: 20,
							padding: 20,
							paddingTop: 35,
						}}
						// margin={5}
						borderRadius={20}
						width={'full'}
						// p={4}
						height={135}
						alignContent={'center'}
						// shadow={4}
					>
						<Pressable
						// onPress={() => {
						// 	setModal(true)
						// 	setData(data[0])
						// }}
						>
							<Flex
								direction='row'
								justifyContent={'space-between'}
								alignItems='center'
							>
								<VStack>{children}</VStack>
								<Status status='Pending' />
							</Flex>
						</Pressable>
					</Box>
				</VStack>
				{/* <Button
					position={'absolute'}
					bottom={10}
					right={15}
					borderRadius={30}
					// width='xs'
					width={60}
					height={60}
				>
					<AddIcon color='white' />
				</Button> */}
			</Box>
		</Box>
	)
}

export default DetailCard
