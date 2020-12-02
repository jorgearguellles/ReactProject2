import React from "react";
import styled from "styled-components";

const WrapperSearchBell = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Search = styled.input`
	padding-left: 15px;
	font-size: 10px;
	width: 80%;
	height: 25px;
	border-radius: 50px;
	outline: none;
`;

const Bell = "./images/bell.png";
const ImgBell = styled.img`
	width: 30px;
	height: 30px;
`;

class Development extends React.Component {
	render() {
		return (
			<WrapperSearchBell>
				<Search placeholder="Search" />
				<ImgBell src={Bell} />
			</WrapperSearchBell>
		);
	}
}

export default Development;
