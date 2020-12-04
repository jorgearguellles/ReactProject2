import React from "react";
import MenuLateral from "../MenuLateral";
import Header from "../Header";
import CreateProduct from "../CreateProduct";
import CoursesSection from "../CoursesSection";
import { WrapperRight, Wrapper } from "./styles";

class Page extends React.Component {
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

export default Page;
