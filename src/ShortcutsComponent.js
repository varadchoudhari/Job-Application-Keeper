import React, { Component } from 'react';
import { Navbar, Input, Button, Nav, NavItem } from 'reactstrap';

export default class ShortcutsComponent extends Component {
	render() {
		return(<div>
				<Navbar>
					<Nav className="clearfix">
						<NavItem className="float-left">
							<Input type="text" placeholder="Type something..."/>
						</NavItem>
						<NavItem className="float-right">
							<Button color="primary" onClick={() => {this.props.toggleModal()}}>Add Application</Button>
						</NavItem>
					</Nav>
				</Navbar>
			</div>);
	}
}