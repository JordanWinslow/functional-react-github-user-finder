import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const messageType = type => {
	if (type === "danger") {
		return `
   background: rgba(100, 20, 20, 1);
   `
	}
}

const AlertBox = styled.div`
	margin: 0 5vw;
	text-align: center;
	color: white;
	${messageType(alert.type)}
`

const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<AlertBox type={alert.type}>
				<p>{alert.message}</p>
			</AlertBox>
		)
	)
}

Alert.propTypes = {
	alert: PropTypes.object.isRequired
}
export default Alert
