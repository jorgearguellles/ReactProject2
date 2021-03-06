import styled from "styled-components";

const WrapperPerfilArrow = styled.div`
	// width: 10vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0 50px 0;
	border-bottom: black 1px solid;
`;

const WrapperPerfil = styled.div`
	display: flex;
`;

const PerfilFoto = styled.img`
	width: 40px;
	height: 40px;
`;

const WrapperPerfilDetails = styled.div`
	text-align: center;
`;

const NamePerfil = styled.p`
	width: 150px;
	font-size: 20px;
	font-family: ruda;
	margin: 3px 10px;
`;

const InfoPerfil = styled(NamePerfil)`
	font-size: 10px;
`;

const ArrowLeft = styled.img`
	width: 25px;
	height: 25px;
	border-radius: 20px;
	padding: 3px;
	margin-right: -35px;
	background-color: white;
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
