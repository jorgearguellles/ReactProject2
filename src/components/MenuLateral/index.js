import React from "react";
import Perfil from "../Perfil";
import MenuPlegLateral from "../MenuPlegLateral";
import WrapperMenuLateral from "./styles";
import ImgLateral from "../ImgLateral";

class MenuLateral extends React.Component {
	render() {
		return (
			<WrapperMenuLateral>
				<Perfil nameUser="Jorge Argüelles" detailsUser="Coursebook" />
				<MenuPlegLateral
					Src="./images/books.png"
					Title="Learning content"
					Option1="Products"
					Option2="Certificates"
					Option3="Course studio"
					Option4="LIVE class"
				/>
				<MenuPlegLateral
					Src="./images/website.png"
					Title="Website"
					Option1="Website1"
					Option2="Website2"
					Option3="Website3"
					Option4="Website4"
				/>
				<MenuPlegLateral
					Src="./images/marketing.png"
					Title="Marketing"
					Option1="Marketing1"
					Option2="Marketing2"
					Option3="Marketing3"
					Option4="Marketing4"
				/>
				<MenuPlegLateral
					Src="./images/analitycs.png"
					Title="Analytics"
					Option1="Analytics1"
					Option2="Analytics2"
					Option3="Analytics3"
					Option4="Analytics4"
				/>
				<MenuPlegLateral
					Src="./images/people.png"
					Title="People"
					Option1="People1"
					Option2="People2"
					Option3="People3"
					Option4="People4"
				/>
				<ImgLateral
					Title="Updrade now"
					Details="Create more courses"
					Src="./images/okHand.png"
				/>
			</WrapperMenuLateral>
		);
	}
}

export default MenuLateral;
