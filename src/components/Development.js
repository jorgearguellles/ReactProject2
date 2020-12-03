import React from "react";
import styles from "styled-components";

const WrapperMenuView = styles.div`
display: flex;`;

const Cuadros = "./images/menucuadrado.png";
const ImgCuadros = styles.img`
width: 20px;
height: 20px;
margin-right: 10px;
`;

const Barras = "./images/menulateral.png";
const ImgBarras = styles.img`
width: 18px;
height: 18px;
`;

class Development extends React.Component {
	render() {
		return (
			<WrapperMenuView>
				<ImgCuadros src={Cuadros} />
				<ImgBarras src={Barras} />
			</WrapperMenuView>
		);
	}
}

export default Development;
