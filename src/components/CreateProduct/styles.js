import styled from "styled-components";

const WrapperCreateProduct = styled.div`
	margin: 0 20px;
	width: 95%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const WrapperMenus = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CreateBottom = styled.button`
	width: 250px;
	height: 40px;
	background-color: orange;
	color: white;
	font-family: ruda;
	font-size: 15px;
	border-radius: 50px;
	border: none;
`;

export { WrapperCreateProduct, WrapperMenus, CreateBottom };
