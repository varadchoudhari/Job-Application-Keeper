import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class ApplicationListComponent extends Component {
	render() {
		const applicationSource = this.props.applications.map((application) => {
			return(
			<div key={application.id} className="col-12 application-log">
						<div className="date">{application.date}</div>
						<div className="company">{application.company}</div>
						<div className="status">{application.status}</div>
						<div className="resume"><Button onClick={() => this.props.invoke()} >Resume</Button></div>
					</div>
					)
		})

		return(<div className="container-fluid">
				{applicationSource}	
			</div>)
	}
}