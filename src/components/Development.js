import React from "react";
import styled from "styled-components";
import MenuLateral from "../components/MenuLateral";
import Header from "../components/Header";
import CreateProduct from "../components/CreateProduct";
import CoursesSection from "../components/CoursesSection";

const Wrapper = styled.div`
	display: flex;
	background-color: #f3e2;
`;

const WrapperRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

class Development extends React.Component {
	render() {
		return (
			<Wrapper>
				<MenuLateral />
				<WrapperRight>
					<Header Title="Products" />
					<CreateProduct />
					<CoursesSection />
				</WrapperRight>
			</Wrapper>
		);
	}
}

export default Development;
