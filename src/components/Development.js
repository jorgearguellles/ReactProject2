import React from "react";
import styled from "styled-components";

import SwitchMenu from "./SwitchMenu";
import MenuPlegable from "./MenuPlegable";

const WrapperMenuLateral = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const WrapperMenus = styled.div`
	width: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CreateProduct = styled.button`
	width: 150px;
	height: 30px;
	background-color: orange;
	color: white;
	font-family: ruda;
	font-size: 11px;
	border-radius: 50px;
	border: noce;
`;

class Development extends React.Component {
	render() {
		return (
			<WrapperMenuLateral>
				<Perfil />
				<MenuPlegLateral />
			</WrapperMenuLateral>
		);
	}
}

export default Development;
