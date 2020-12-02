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

function Perfil(props) {
	return (
		<WrapperPerfilArrow>
			<WrapperPerfil>
				<PerfilFoto src={ImagenPerfil} />
				<WrapperPerfilDetails>
					<NamePerfil>{props.nameUser}</NamePerfil>
					<InfoPerfil>{props.detailsUser}</InfoPerfil>
				</WrapperPerfilDetails>
			</WrapperPerfil>
			<ArrowLeft src={Arrow} />
		</WrapperPerfilArrow>
	);
}

export default Perfil;
