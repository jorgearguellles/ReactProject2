import React from "react";
import styled from "styled-components";

import SwitchMenu from "./SwitchMenu";
import MenuPlegable from "./MenuPlegable";

const WrapperCreateProduct = styled.div`
	width: 80%;
	display: flex;
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
			<WrapperCreateProduct>
				<WrapperMenus>
					<SwitchMenu />
					<MenuPlegable Title="Sort by: None" Option="None" />
					<MenuPlegable Title="Type: None" Option="Nones" />
				</WrapperMenus>
				<CreateProduct type="buttom">Create product</CreateProduct>
			</WrapperCreateProduct>
		);
	}
}

export default Development;
