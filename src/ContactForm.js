import React from 'react'
import { Field, reduxForm } from 'redux-form'
//const { DOM: { input } } = React


let ContactForm = props => {
	const { handleSubmit } = props
	console.log('ContractForm, props:' , JSON.stringify(props));
	let input = "input"
	return <form onSubmit={handleSubmit}> 
		<div>
			<label htmlFor="firstName"> First Name</label>
			<Field name="firstName" component={input} type="text" />
		</div>
		<div>
			<label htmlFor="lastName">Last Name</label>
			<Field name="lastName" component={input} type="text" />
		</div>
		<div>
			<label htmlFor="email">Email</label>
			<Field name="email" component={input} type="email" />
		</div>
		<div>
			<label htmlFor="employed">Employed</label>
			<Field name="employed" component={input} type="checkbox" />
		</div>
		<button type="submit">Submit</button>
	</form>
}

ContactForm = reduxForm({
	form: 'contact'
})(ContactForm)

export default ContactForm

