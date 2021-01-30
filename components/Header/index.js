import React from "react";
import SearchBell from "../SearchBell";
import { WrapperProductSearchBell, Title } from "./styles";

class Header extends React.Component {
	render() {
		return (
			<WrapperProductSearchBell>
				<Title>{this.props.Title}</Title>
				<SearchBell />
			</WrapperProductSearchBell>
		);
	}
}

export default Header;
