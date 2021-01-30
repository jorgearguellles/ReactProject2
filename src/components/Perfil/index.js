import React from "react";

import {
	WrapperPerfilArrow,
	WrapperPerfil,
	PerfilFoto,
	WrapperPerfilDetails,
	NamePerfil,
	InfoPerfil,
	ArrowLeft,
} from "./styles";

const ImagenPerfil = "../images/iconPerfil.png";
const Arrow = "../images/arrowLeft.png";

class Perfil extends React.Component {
	render() {
		return (
			<WrapperPerfilArrow>
				<WrapperPerfil>
					<PerfilFoto src={ImagenPerfil} />
					<WrapperPerfilDetails>
						<NamePerfil>{this.props.nameUser}</NamePerfil>
						<InfoPerfil>{this.props.detailsUser}</InfoPerfil>
					</WrapperPerfilDetails>
				</WrapperPerfil>
				<ArrowLeft src={Arrow} />
			</WrapperPerfilArrow>
		);
	}
}

export default Perfil;
