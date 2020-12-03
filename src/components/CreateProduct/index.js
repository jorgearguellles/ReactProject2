import React from "react";
import SwitchMenu from "./SwitchMenu";
import MenuPlegable from "./MenuPlegable";
export { WrapperCreateProduct, WrapperMenus, CreateProduct } from "./styles";

class CreateProduct extends React.Component {
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

export default CreateProduct;
