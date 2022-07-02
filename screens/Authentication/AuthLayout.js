import { Box, Heading } from 'native-base';
import { StyleSheet } from 'react-native';
import CustomView from '../../components/CustomView';
import CustomAddForm from '../../components/Form/CustomAddForm';
import CustomButton from '../../components/Form/CustomButton';
import { IMAGES } from '../../utils/constants';

const AuthLayout = ({
	heading = 'Signup',
	btnText = 'Register',
	form,
	setForm,
	inputFields,
	handleSubmit,
}) => {
	console.log({ IMAGES: IMAGES?.LOGIN });
	return (
		<CustomView>
			<Box width={'100%'}>
				{/* <Image
					source={{
						uri: IMAGES.USER,
					}}
					alt='Alternate Text'
					size='xl'
				/> */}
				<Heading
					color="primary.500"
					fontWeight="bold"
					margin={4}
					fontSize="4xl"
				>
					{' '}
					{heading} !
				</Heading>
				<CustomAddForm form={form} setForm={setForm} array={inputFields} />

				{heading === 'Login' && (
					<Box>
						<Heading size={'xs'} marginTop="5" textAlign={'center'}>
							{' '}
							First Time here ?{' '}
							<Heading
								size={'xs'}
								color="primary.700"
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
		</CustomView>
	);
};

export default AuthLayout;

const styles = StyleSheet.create({});
