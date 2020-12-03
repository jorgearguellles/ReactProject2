import React from "react";
import styled from "styled-components";

import Perfil from "./Perfil";
import MenuPlegLateral from "./MenuPlegLateral";

const WrapperMenuLateral = styled.div`
	width: 30%;
	height: 100vh;
	background-color: #eaeaea;
`;

class Development extends React.Component {
	render() {
		return (
			<WrapperMenuLateral>
				<Perfil nameUser="Jorge Argüelles" detailsUser="Coursebook" />
				<MenuPlegLateral
					Src=""
					Title="Learning content"
					Option1="Products"
					Option2="Certificates"
					Option3="Course studio"
					Option4="LIVE class"
				/>
				<MenuPlegLateral
					Src=""
					Title="Website"
					Option1="Website1"
					Option2="Website2"
					Option3="Website3"
					Option4="Website4"
				/>
				<MenuPlegLateral
					Src=""
					Title="Marketing"
					Option1="Marketing1"
					Option2="Marketing2"
					Option3="Marketing3"
					Option4="Marketing4"
				/>
				<MenuPlegLateral
					Src=""
					Title="Analytics"
					Option1="Analytics1"
					Option2="Analytics2"
					Option3="Analytics3"
					Option4="Analytics4"
				/>
				<MenuPlegLateral
					Src=""
					Title="People"
					Option1="People1"
					Option2="People2"
					Option3="People3"
					Option4="People4"
				/>
			</WrapperMenuLateral>
		);
	}
}

export default Development;
