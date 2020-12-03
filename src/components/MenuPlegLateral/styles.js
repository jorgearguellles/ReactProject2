import styled from "styled-components";

const WrapperMenuPlegable = styled.div`
	display: flex;
`;

const WrapperTitle = styled.div`
	display: flex;
`;

const WrapperTitleOptions = styled.div``;

const ImgDownArrow = styled.img`
	margin: 18px 10px 0 10px;
	width: 40px;
	width: 15px;
	height: 15px;
`;

const Title = styled.p`
	font-size: 16px;
	font-family: ruda;
`;

const List = styled.ul`
	display: none;
	list-style: none;
	padding: 15px;
	position: absolute;
	margin: -15px 0px 0px -10px;
	${WrapperMenuPlegable}:hover & {
		display: block;
	}
`;

const ItemList = styled.li`
	margin: 5px 0px;
	font-size: 20px;
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
