import { useToast } from 'native-base'
import React from 'react'

export default function useHook() {
	const toast = useToast()

	const showToast = (message, type) => {
		console.log({ message, type })

		const renderColor = type && type === 'error' ? 'red.500' : 'emerald.500'
		toast.show({
			render: () => {
				return (
					<Box bg={renderColor} px='2' py='1' rounded='sm' mb={5}>
						{message}
					</Box>
				)
			},
		})
	}
	return { showToast }
}
