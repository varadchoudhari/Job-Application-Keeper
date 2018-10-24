import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import NavbarComponent from './Navbar.js';
import ShortcutsComponent from './ShortcutsComponent';
import ApplicationListComponent from './ApplicationListComponent';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
			newDate: "",
			newCompany: "",
			newStatus: "",
			applications: [],
		};
		this.toggle = this.toggle.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
	}

	toggle() {
		this.setState({modal: !this.state.modal});
	}

	handleDateChange(e) {
		this.setState({newDate: e.target.value})
	}

	handleCompanyNameChange(e) {
		this.setState({newCompany: e.target.value})
	}

	handleStatusChange(e) {
		this.setState({newStatus: e.target.value})
	} 

	saveData() {
		let currentApplications = this.state.applications.slice()
		currentApplications.push({id: this.state.applications.length+1, 
								  date: this.state.newDate, 
								  company: this.state.newCompany, 
								  status: this.state.newStatus})
		this.setState({applications: currentApplications, newStatus: "", newDate: "", newCompany: "", modal: !this.state.modal})
	}

  render() {
    return (
      <div className="App">
      	<Modal toggle={this.toggle} isOpen={this.state.modal}>
      		<ModalHeader toggle={this.toggle}>Add New Application</ModalHeader>
      		<ModalBody>
      			<Form>
      				<FormGroup>
      					<Label>Date</Label>
      					<Input type="text" onChange={this.handleDateChange} />
      				</FormGroup>
      				<FormGroup>
      					<Label>Company</Label>
      					<Input type="text" onChange={this.handleCompanyNameChange}/>
      				</FormGroup>
      				<FormGroup>
      					<Label>Status</Label>
      					<Input type="text" onChange={this.handleStatusChange}/>
      				</FormGroup>
      			</Form>
      		</ModalBody>
      		<ModalFooter>
      			<Button onClick={() => this.saveData()} >Save</Button>
      		</ModalFooter>
      	</Modal>
        <NavbarComponent />
        <ShortcutsComponent toggleModal={this.toggle} />
        <ApplicationListComponent applications={this.state.applications}/>
      </div>
    );
  }
}

export default App;
