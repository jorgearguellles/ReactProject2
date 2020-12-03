import styled from "styled-components";

const WrapperCreateProduct = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const WrapperMenus = styled.div`
	width: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CreateBottom = styled.button`
	width: 150px;
	height: 30px;
	background-color: orange;
	color: white;
	font-family: ruda;
	font-size: 11px;
	border-radius: 50px;
	border: none;
`;

export { WrapperCreateProduct, WrapperMenus, CreateBottom };
