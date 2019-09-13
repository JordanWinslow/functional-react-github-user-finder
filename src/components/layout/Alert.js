import React from "react"
import styled from "styled-components"

const AlertBox = styled.div`
	padding: 0.5rem 0;
	text-align: center;
	color: white;
	text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
	animation: fadeInFromNone 0.5s ease-in;

	@keyframes fadeInFromNone {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}
`

const Alert = ({ alert }) => {
	return (
		alert !== null && (
			<AlertBox className={alert.type}>
				<p>{alert.message}</p>
			</AlertBox>
		)
	)
}

export default Alert
