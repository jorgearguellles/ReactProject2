import styled from "styled-components";

const WrapperMenuPlegable = styled.div`
	display: flex;
	margin-top: 30px;
`;

const WrapperTitle = styled.div`
	display: flex;
`;

const WrapperTitleOptions = styled.div``;

const ImgDownArrow = styled.img`
	margin: 18px 10px 0 10px;
	width: 22px;
	height: 22px;
`;

const Title = styled.p`
	font-size: 20px;
	font-family: ruda;
	cursor: pointer;
`;

const List = styled.ul`
	background-color: gray;
	cursor: pointer;
	display: none;
	list-style: none;
	padding: 15px;
	position: absolute;
	margin: -15px 0px 0px 20px;
	${WrapperMenuPlegable}:hover & {
		display: block;
	}
`;

const ItemList = styled.li`
	margin: 5px 0px;
	font-size: 20px;
	font-family: ruda;
`;

const Anchor = styled.a`
	font-family: ruda;
	color: black;
	text-decoration: none;
	cursor: pointer;
	${ItemList}:hover & {
		color: orange;
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
