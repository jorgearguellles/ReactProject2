import styled from "styled-components";

const WrapperSearchBell = styled.div`
	margin: 10px;
	width: 25%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Search = styled.input`
	padding-left: 15px;
	font-size: 15px;
	width: 80%;
	height: 40px;
	border-radius: 50px;
	outline: none;
`;

const ImgBell = styled.img`
	width: 40px;
	height: 40px;
	margin-left: 30px;
`;

export { WrapperSearchBell, Search, ImgBell };
