import { Box, Heading, Image } from 'native-base'
import { StyleSheet } from 'react-native'
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
		<Box h={'full'} width={'100%'}>
			{heading === 'Login' && (
				<Image
					source={{
						uri: IMAGES.LOGIN,
					}}
					alt='Alternate Text'
					size='xl'
					width={'full'}
					height={240}
					// marginTop='50'
				/>
			)}
			<Heading color='primary.500' fontWeight='bold' margin={4} fontSize='4xl'>
				{' '}
				{heading} !
			</Heading>
			<CustomAddForm form={form} setForm={setForm} array={inputFields} />

			{heading === 'Login' && (
				<Box>
					<Heading size={'xs'} marginTop='5' textAlign={'center'} color='black'>
						{' '}
						First Time here ?{' '}
						<Heading
							size={'xs'}
							color='primary.700'
							fontWeight={'bold'}
							style={{ textDecorationLine: 'underline' }}
						>
							Register Here{' '}
						</Heading>
					</Heading>
				</Box>
			)}
			<CustomButton text={btnText} onPress={handleSubmit} />
		</Box>
	)
}

export default AuthLayout

const styles = StyleSheet.create({})
