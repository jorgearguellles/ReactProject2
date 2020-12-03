import React from "react";

import {
	WrapperMenuPlegable,
	WrapperTitle,
	WrapperTitleOptions,
	ImgDownArrow,
	Title,
	List,
	ItemList,
	Anchor,
} from "./styles";

class MenuPlegable extends React.Component {
	render() {
		return (
			<WrapperMenuPlegable>
				<WrapperTitleOptions>
					<WrapperTitle>
						<ImgDownArrow src={this.props.Src} />
						<Title>{this.props.Title}</Title>
					</WrapperTitle>
					<List>
						<ItemList>
							<Anchor href="/">{this.props.Option1}</Anchor>
						</ItemList>
						<ItemList>
							<Anchor href="/">{this.props.Option2}</Anchor>
						</ItemList>
						<ItemList>
							<Anchor href="/">{this.props.Option3}</Anchor>
						</ItemList>
						<ItemList>
							<Anchor href="/">{this.props.Option4}</Anchor>
						</ItemList>
					</List>
				</WrapperTitleOptions>
			</WrapperMenuPlegable>
		);
	}
}

export default MenuPlegable;
