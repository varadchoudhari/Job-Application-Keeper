import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

export default class NavbarComponent extends Component {
	render() {
		return(<div>
			<Navbar color="light">
				<NavbarBrand>Application Logger</NavbarBrand>
			</Navbar>
			</div>);
	}
}