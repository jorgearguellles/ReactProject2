import styled from "styled-components";

const WrapperSectionMenuLat = styled.div`
	width: 20%;
	background-color: #f3e2ef;
	border-radius: 40px;
	padding: 20px;
	margin-top: 90px;
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
	width: inherit;
	margin: 20px auto;
`;

const ImgLat = styled.img`
	width: 50px;
	heigth: 50px;
`;

export {
	WrapperSectionMenuLat,
	WrapperDetails,
	Title,
	Details,
	WrapperImg,
	ImgLat,
};
