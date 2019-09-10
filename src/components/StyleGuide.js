import React from "react"

const StyleGuide = () => {
	return (
		<React.Fragment>
			<h1>Header 1</h1>
			<p className="large">Paragraph text</p>
			<br />
			<h2>Header 2</h2>
			<p className="medium">Paragraph text</p>
			<br />
			<h3>Header 3</h3>
			<p>Paragraph text</p>
			<br />
			<h4>Header 4</h4>
			<p>Paragraph text</p>
			<br />
			<h5>Header 5</h5>
			<p>Paragraph Text</p>
			<br />
			<b>
				<p className="large">Unordered Lists</p>
			</b>
			<ul>
				<li>List Item 1</li>
				<li>List Item 2</li>
				<li>List Item 3</li>
				<li>List Item 4</li>
			</ul>
			<br />
			<b>
				<p className="large">Forms</p>
			</b>
			<form>
				<label htmlFor="textInput">Text Input </label>
				<input type="text" id="textInput"></input>
    <br />
				<label htmlFor="textInputLarge">Text Area Input </label>
				<input type="textarea" id="textInputLarge"></input>
    <br />
				<button type="submit">Submit Button</button>
			</form>
		</React.Fragment>
	)
}

export default StyleGuide
