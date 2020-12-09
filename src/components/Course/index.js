import React from "react";
import {
	WrapperCourse,
	Categories,
	Title,
	Details,
	WrapperImg,
	WrapperStart,
	Starts,
	Start,
	ImgCourse,
} from "./styles";

class Course extends React.Component {
	render() {
		return (
			<WrapperCourse background="red">
				<Categories>{this.props.Categories} </Categories>
				<Title>
					{this.props.Title1} <br /> {this.props.Title2}
				</Title>
				<Details>{this.props.Details}</Details>
				<WrapperImg>
					<WrapperStart>
						<Start src={this.props.ImgStar} />
						<Starts>{this.props.Stars}</Starts>
					</WrapperStart>
					<ImgCourse src={this.props.ImgC} />
				</WrapperImg>
			</WrapperCourse>
		);
	}
}

export default Course;
