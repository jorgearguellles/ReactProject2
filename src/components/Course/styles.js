import styled from "styled-components";

const WrapperCourse = styled.div`
	width: 260px;
	height: 260px;
	background-color: #45a8be;
	border-radius: 40px;
	padding: 20px;
	margin: 0 auto;
	flex-shrink: 0;
`;

const Categories = styled.p`
	font-family: ruda;
`;

const Title = styled(Categories)`
	font-size: 30px;
	margin: 15px 0;
`;

const Details = styled(Categories)`
	font-size: 10px;
`;

const WrapperImg = styled.div`
	width: 100%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

const WrapperStart = styled.div`
	display: flex;
	align-items: center;
`;

const Start = styled.img`
	width: 20px;
	heigth: 20px;
	margin-right: 5px;
`;

const Starts = styled(Categories)`
	font-size: 10px;
`;

const ImgCourse = styled.img`
	width: 100px;
	heigth: 100px;
`;

export {
	WrapperCourse,
	Categories,
	Title,
	Details,
	WrapperImg,
	WrapperStart,
	Starts,
	Start,
	ImgCourse,
};
