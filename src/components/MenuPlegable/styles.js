import styled from "styled-components";

const WrapperMenuPlegable = styled.div`
	display: flex;
`;

const WrapperTitle = styled.div`
	display: flex;
`;

const WrapperTitleOptions = styled.div``;

const ImgDownArrow = styled.img`
	margin-top: 10px;
	margin-left: 10px;
	width: 20px;
	height: 20px;
`;

const Title = styled.p`
	font-size: 15px;
	font-family: ruda;
	cursor: pointer;
`;

const List = styled.ul`
	display: none;
	cursor: pointer;
	background-color: white;
	list-style: none;
	padding: 20px;
	position: absolute;
	text-align: center;
	margin: -15px 0px 0px 0px;
	${WrapperMenuPlegable}:hover & {
		display: block;
	}
`;

const ItemList = styled.li`
	margin-top: 25px 0px;
	font-size: 20px;
	font-family: ruda;
`;

const Anchor = styled.a`
	color: black;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
	${ItemList}:hover & {
		color: #2eccfa;
	}
`;

export {
	WrapperMenuPlegable,
	WrapperTitle,
	WrapperTitleOptions,
	ImgDownArrow,
	Title,
	List,
	ItemList,
	Anchor,
};
