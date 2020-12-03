import styled from "styled-components";

const WrapperSectionMenuLat = styled.div`
	width: 80%;
	height: 15%;
	background-color: green;
	border-radius: 40px;
	padding: 20px;
	margin-top: 25px;
`;

const WrapperDetails = styled.div``;

const Title = styled.p`
	margin: 0;
	font-family: ruda;
`;

const Details = styled(Title)`
	font-size: 10px;
`;

const WrapperImg = styled.div`
	display: flex;
	align-items: center;
`;

const ImgLat = styled.img`
	width: 50px;
	heigth: 50px;
	margin: 40px auto;
`;

export {
	WrapperSectionMenuLat,
	WrapperDetails,
	Title,
	Details,
	WrapperImg,
	ImgLat,
};
