import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomView from '../../components/CustomView'
import { Box, Heading, Image } from 'native-base'
import CustomAddForm from '../../components/Form/CustomAddForm'
import CustomButton from '../../components/Form/CustomButton'
import { IMAGES } from '../../utils/constants'

const AuthLayout = ({
	heading = 'Signup',
	btnText = 'Register',
	form,
	setForm,
	inputFields,
	handleSubmit,
}) => {
	return (
		<CustomView>
			<Box width={'100%'}>
				<Image
					source={{
						uri: IMAGES.LOGIN,
					}}
					alt='Alternate Text'
					size='xl'
				/>
				<Heading color='primary.500' fontWeight='bold' margin={4} fontSize='4xl'>
					{' '}
					{heading} !
				</Heading>
				<CustomAddForm form={form} setForm={setForm} array={inputFields} />
				<CustomButton text={btnText} onPress={handleSubmit} />
			</Box>
		</CustomView>
	)
}

export default AuthLayout

const styles = StyleSheet.create({})
