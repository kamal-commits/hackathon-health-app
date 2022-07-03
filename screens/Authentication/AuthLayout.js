import { Box, Heading, Image } from 'native-base'
import { StyleSheet } from 'react-native'
import CustomAddForm from '../../components/Form/CustomAddForm'
import CustomButton from '../../components/Form/CustomButton'
import { IMAGES } from '../../utils/constants'

const AuthLayout = ({
	heading = false,
	btnText = 'Register',
	form,
	setForm,
	inputFields,
	handleSubmit,
	navigation = () => {},
}) => {
	return (
		<Box width={'100%'}>
			{heading === 'Login' ? (
				<Image
					source={{
						uri: IMAGES.LOGIN,
					}}
					alt='Alternate Text'
					size='xl'
					width={'full'}
					height={300}
					marginTop='50'
					borderRadius={25}
				/>
			) : null}
			{heading ? (
				<Heading color='primary.500' fontWeight='bold' margin={4} fontSize='4xl'>
					{heading} !
				</Heading>
			) : null}
			<Box margin={!heading ? 4 : 0}>
				<CustomAddForm form={form} setForm={setForm} array={inputFields} />
			</Box>

			{heading === 'Login' ? (
				<Box>
					<Heading size={'xs'} marginTop='5' textAlign={'center'} color='black'>
						{' '}
						First Time here ?{' '}
						<Heading
							size={'xs'}
							color='primary.700'
							fontWeight={'bold'}
							style={{ textDecorationLine: 'underline' }}
							onPress={navigation}
						>
							Register Here{' '}
						</Heading>
					</Heading>
				</Box>
			) : null}
			<CustomButton text={btnText} onPress={handleSubmit} />
		</Box>
	)
}

export default AuthLayout

const styles = StyleSheet.create({})
