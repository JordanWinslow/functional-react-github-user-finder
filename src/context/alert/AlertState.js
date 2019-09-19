import React, { useReducer } from "react"
import AlertContext from "./alertContext"
import alertReducer from "./alertReducer"

import { SET_ALERT, REMOVE_ALERT } from "../types"

const AlertState = props => {
  const initialState = null
  const [state, dispatch] = useReducer(alertReducer, initialState)

<<<<<<< HEAD
  const setAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } })
    // MESSAGE IS REMOVED AFTER 4 SECONDS
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT })
    }, 4000)
  }
=======
	const setAlert = (message, type) => {
		dispatch({ type: SET_ALERT, payload: { message, type } })
		setTimeout(() => {
			dispatch({ type: REMOVE_ALERT })
		}, 4000)
	}
>>>>>>> 2822b2e186d9a87c067ced24a68819d3eab4ca4b

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
