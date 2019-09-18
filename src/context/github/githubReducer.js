import {
	SEARCH_USERS,
	GET_USER,
	GET_REPOS,
	CLEAR_USERS,
	SET_LOADING
} from "../types"

/* this function accepts the current state object along with an action to take, then calls the corresponding functions to complete that action. Though this is technically unnecessary for our project to work, the larger we scale our applications, the more difficult it becomes to manage and therefore implementing a reducer can help us understand the logic in our code more easily without getting caught up in the minute details. */
export default (state, action) => {
	// action = {type, optionalPayload}
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			}
		case GET_USER:
			return {
				...state,
				userDetails: action.payload,
				loading: false
			}
		case GET_REPOS:
			return {
				...state,
				userRepos: action.payload,
				loading: false
			}
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false
			}
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		default:
			return state
	}
}
