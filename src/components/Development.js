import React from "react";
import styled from "styled-components";

const WrapperPerfilArrow = styled.div`
	width: 20%;
`;

const WrapperPerfil = styled.div``;

const PerfilFoto = styled.img``;

const WrapperPerfilDetails = styled.div`
	text-align: center;
`;

const NamePerfil = styled.p`
	font-size: 12px;
	font-family: ruda;
	margin: 3px;
`;

const InfoPerfil = styled(NamePerfil)`
	font-size: 10px;
`;

const ArrowLeft = styled.img``;

function Development() {
	return (
		<WrapperPerfilArrow>
			<WrapperPerfil>
				<PerfilFoto />
				<WrapperPerfilDetails>
					<NamePerfil>Jorge Argüelles</NamePerfil>
					<InfoPerfil>Coursebook</InfoPerfil>
				</WrapperPerfilDetails>
			</WrapperPerfil>
			<ArrowLeft />
		</WrapperPerfilArrow>
	);
}

export default Development;
