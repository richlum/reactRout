import React from 'react'
import { Field, reduxForm } from 'redux-form'


let EmployForm = props => {
	const { handleSubmit } = props
	console.log('EmployForm, props:' , JSON.stringify(props));
	let input = "input"
	return <form onSubmit={handleSubmit}> 
		<div>
			<label htmlFor="employerName">Employer Name</label>
			<Field name="employerName" component={input} type="text" />
		</div>
		<div>
			<label htmlFor="employerBiz">Employer Business</label>
			<Field name="employerBiz" component={input} type="text" />
		</div>
		<div>
			<label htmlFor="employeremail">Employer Email</label>
			<Field name="employeremail" component={input} type="email" />
		</div>
		<div>
			<label htmlFor="corp">Corporation</label>
			<Field name="corp" component={input} type="checkbox" />
		</div>
		<button type="submit">Submit</button>
	</form>
}

EmployForm = reduxForm({
	form: 'contact'
})(EmployForm)

export default EmployForm

