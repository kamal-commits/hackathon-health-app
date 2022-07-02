import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomInput from './CustomInput'
import { Box, Stack } from 'native-base'
import CustomButton from './CustomButton'
import CustomSelect from './CustomSelect'

const CustomAddForm = ({ array = [], form, setForm }) => {
	return (
		<Stack space={4} w='100%' maxW='320px' mx='auto'>
			{array.map((val) => {
				let visiblity = val?.visible !== 'false' ? true : false
				// console.log({ visible: val?.visible, visiblity })
				let check = ['button']
				return (
					<Box key={val?.label}>
						{!val?.options && !check.includes(val?.type) && visiblity && (
							<CustomInput
								name={val?.name}
								value={val?.value}
								form={form}
								setForm={setForm}
								label={val?.label}
								type={val?.type}
								inputType={val?.inputType}
							/>
						)}
						{val?.options && !check.includes(val?.type) && visiblity && (
							<CustomSelect
								name={val?.name}
								value={val?.value}
								form={form}
								setForm={setForm}
								label={val?.label}
								options={val?.options}
								disabled={val?.disabled}
							/>
						)}

						{val?.type === 'button' && (
							<CustomButton text={val?.label} onPress={val?.onPress} />
						)}
					</Box>
				)
			})}
		</Stack>
	)
}

export default CustomAddForm

const styles = StyleSheet.create({})
