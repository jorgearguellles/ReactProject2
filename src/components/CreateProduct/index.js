import React from "react";
import SwitchMenu from "../SwitchMenu";
import MenuPlegable from "../MenuPlegable";
import { WrapperCreateProduct, WrapperMenus, CreateBottom } from "./styles";

class CreateProduct extends React.Component {
	render() {
		return (
			<WrapperCreateProduct>
				<WrapperMenus>
					<SwitchMenu />
					<MenuPlegable Title="Sort by: None" Option="None" />
					<MenuPlegable Title="Type: None" Option="Nones" />
				</WrapperMenus>
				<CreateBottom type="buttom">Create product</CreateBottom>
			</WrapperCreateProduct>
		);
	}
}

export default CreateProduct;
