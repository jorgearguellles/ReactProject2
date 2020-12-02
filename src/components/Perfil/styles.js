import styled from "styled-components";

const WrapperPerfilArrow = styled.div`
	// background-color: #eaeaea;
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const WrapperPerfil = styled.div`
	display: flex;
`;

const PerfilFoto = styled.img`
	width: 30px;
	height: 30px;
`;

const WrapperPerfilDetails = styled.div`
	text-align: center;
`;

const NamePerfil = styled.p`
	font-size: 12px;
	font-family: ruda;
	margin: 3px 10px;
`;

const InfoPerfil = styled(NamePerfil)`
	font-size: 10px;
`;

const ArrowLeft = styled.img`
	width: 25px;
	height: 25px;
	background-color: #eaeaea;
	border-radius: 20px;
	padding: 3px;
	margin-right: -16px;
`;

export {
	WrapperPerfilArrow,
	WrapperPerfil,
	PerfilFoto,
	WrapperPerfilDetails,
	NamePerfil,
	InfoPerfil,
	ArrowLeft,
};
