import React from "react";
import { WrapperMenuView, ImgBarras, ImgCuadros } from "./styles";

const Cuadros = "./images/menucuadrado.png";
const Barras = "./images/menulateral.png";

class SwitchMenu extends React.Component {
	render() {
		return (
			<WrapperMenuView>
				<ImgCuadros src={Cuadros} />
				<ImgBarras src={Barras} />
			</WrapperMenuView>
		);
	}
}

export default SwitchMenu;
