import React from 'react'
import EmployForm from './EmployForm'

class EmployPage extends React.Component {
	submit = values => {
		console.log(values)
	}
	render() {
		return <EmployForm onSubmit={this.submit} />
	}
}

export default EmployPage
