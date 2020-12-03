import React from "react";
import styled from "styled-components";

const WrapperSectionMenuLat = styled.div`
	width: 20%;
	background-color: #f3e2ef;
	border-radius: 40px;
	padding: 20px;
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

const ImgMano = "./images/okHand.png";
const ImgLateral = styled.img`
	width: 50px;
	heigth: 50px;
`;

class Development extends React.Component {
	render() {
		return (
			<WrapperSectionMenuLat>
				<WrapperDetails>
					<Title>Titulo</Title>
					<Details>deatlles</Details>
				</WrapperDetails>
				<WrapperImg>
					<ImgLateral src={ImgMano} />
				</WrapperImg>
			</WrapperSectionMenuLat>
		);
	}
}

export default Development;
