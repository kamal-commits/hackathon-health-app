// export const backendUrl = 'https://f871-14-97-167-154.ngrok.io/api';
// export const backendUrl = 'https://hackathon-healthcare-app.herokuapp.com/api'
export const backendUrl = 'http://localhost:8000/api'

export const API = {
	LOGIN: `${backendUrl}/auth/login`,
	SIGNUP: `${backendUrl}/auth/signup`,
	BOOK_APPOINTMENT: `${backendUrl}/user/bookAppointment`,
	UPDATE_APPOINTMENT: `${backendUrl}/user/updateAppointment`,
	GET_APPOINTMENTS: `${backendUrl}/user/getAppointments`,
	GET_QUERIES: `${backendUrl}/query/get`,
}
