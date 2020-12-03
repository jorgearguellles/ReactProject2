import React from "react";
import {
	WrapperSectionMenuLat,
	WrapperDetails,
	Title,
	Details,
	WrapperImg,
	ImgLat,
} from "./styles";

class ImgLateral extends React.Component {
	render() {
		return (
			<WrapperSectionMenuLat>
				<WrapperDetails>
					<Title>{this.props.Title}</Title>
					<Details>{this.props.Details}</Details>
				</WrapperDetails>
				<WrapperImg>
					<ImgLat src={this.props.Src} />
				</WrapperImg>
			</WrapperSectionMenuLat>
		);
	}
}

export default ImgLateral;
