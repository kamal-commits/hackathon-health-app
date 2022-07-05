import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AlertDialog, Box, Button } from 'native-base'
import CustomInput from './Form/CustomInput'

const Dialog = ({
	reason,
	setReason,
	isOpen,
	setIsOpen,
	setStatus,
	handleSubmit,
}) => {
	const onClose = () => {
		setIsOpen(false)
	}

	const updateStatus = (status) => {
		console.log({ status })
		setStatus(status)
		handleSubmit(status)
		setIsOpen(false)
	}

	const cancelRef = React.useRef(null)
	return (
		<AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
			<AlertDialog.Content>
				<AlertDialog.CloseButton />
				<AlertDialog.Header>What You Want to Do ?</AlertDialog.Header>
				<AlertDialog.Body>
					If you declining then Appointment what will be the Reason. ?
					<Box marginTop='2'>
						<CustomInput label='Reason' value={reason} setForm={setReason} />
					</Box>
				</AlertDialog.Body>
				<AlertDialog.Footer>
					<Button.Group space={2}>
						<Button colorScheme='danger' onPress={() => updateStatus('REJECTED')}>
							Decline
						</Button>
						<Button colorScheme='success' onPress={() => updateStatus('ACCEPTED')}>
							Approve
						</Button>
					</Button.Group>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog>
	)
}

export default Dialog

const styles = StyleSheet.create({})
