import React, { useReducer } from "react"
import AlertContext from "./alertContext"
import alertReducer from "./alertReducer"

import { SET_ALERT, REMOVE_ALERT } from "../types"

const AlertState = props => {
	const initialState = null
	const [state, dispatch] = useReducer(alertReducer, initialState)

	const setAlert = (message, type) => {
		dispatch({ type: SET_ALERT, payload: { message, type } })
		// MESSAGE IS REMOVED AFTER 4 SECONDS
		setTimeout(() => {
			dispatch({ type: REMOVE_ALERT })
		}, 4000)
	}

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert
			}}
		>
			{props.children}
		</AlertContext.Provider>
	)
}

export default AlertState
