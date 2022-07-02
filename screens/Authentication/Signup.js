import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/CustomView'
import { Box, Heading, HStack, Image, VStack } from 'native-base'
import { IMAGES } from '../../utils/constants'
import CustomButton from '../../components/Form/CustomButton'
import CustomAddForm from '../../components/Form/CustomAddForm'
import AuthLayout from './AuthLayout'
import { signup } from '../../utils/apiServices'

const Signup = ({ navigation }) => {
	const [userType, setUserType] = useState('DOCTOR')
	const [formStep, setFormStep] = useState(true)
	const [form, setForm] = useState({
		name: '',
		email: '',
		department: '',
		userType: userType,
		phoneNumber: '',
	})
	console.log({ IMAGES })
	const cardDetails = [
		{
			image: IMAGES.USER,
			userType: 'I am User',
			user: 'USER',
		},
		{ image: IMAGES.DOCTOR, userType: 'I am Doctor', user: 'DOCTOR' },
	]
	const inputFields = [
		{ label: 'Name', value: form?.name, name: 'name' },
		{ label: 'Email', value: form?.email, name: 'email' },
		{ label: 'Phone Number', value: form?.phoneNumber, name: 'phoneNumber' },
		{ label: 'Age', value: form?.age, name: 'age' },
		{
			label: 'Gender',
			value: form?.gender,
			name: 'gender',
			options: ['MALE', 'FEMALE', 'OTHERS'],
		},

		{ label: 'Password', value: form?.password, name: 'password', type: 'password' },
	]

	if (userType === 'DOCTOR') {
		inputFields.splice(2, 0, {
			label: 'Department',
			value: form?.department,
			name: 'department',
			options: ['A', 'B', 'C'],
		})
	}

	const handleSignup = async () => {
		signup(form)
	}

	return (
		<CustomView>
			<Box
				width={'100%'}
				// flex={1}

				// flexDirection={'row'}
				style={{ padding: 10 }}
			>
				{formStep ? (
					<AuthLayout
						form={form}
						setForm={setForm}
						inputFields={inputFields}
						handleSubmit={handleSignup}
					/>
				) : (
					<>
						<HStack space={6} justifyContent='space-between'>
							{cardDetails.map((val, i) => {
								return (
									<Box
										style={
											val?.user === userType
												? [styles.cardBox, styles.activeCard]
												: styles.cardBox
										}
										onTouchStart={() => {
											setUserType(val?.user)
										}}
									>
										<VStack alignItems={'center'}>
											<Image
												source={{
													uri: val?.image,
												}}
												alt='Alternate Text'
												size='xl'
												style={styles.image}
											/>
											<Heading
												size='lg'
												marginTop={7}
												color='primary.10'
												style={{ fontWeight: 'bold' }}
											>
												{val?.userType}
											</Heading>
											{/* <Text>as</Text> */}
										</VStack>
									</Box>
								)
							})}
						</HStack>
						<Box style={{ marginTop: 25 }}>
							<CustomButton text='Continue' onPress={() => setFormStep(true)} />
						</Box>
					</>
				)}
			</Box>
		</CustomView>
	)
}

export default Signup

const styles = StyleSheet.create({
	image: {
		width: 150,
		height: 200,
		borderRadius: 25,
	},
	cardBox: {
		padding: 10,
		elevation: 20,
		shadowColor: '#52006A',
		backgroundColor: 'white',
		borderRadius: 25,
	},
	activeCard: {
		borderColor: 'blue',
		borderWidth: 2,
	},
})
