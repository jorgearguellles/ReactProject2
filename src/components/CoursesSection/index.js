import React from "react";
import Course from "../Course";
import { Wrapper, WrapperCourses, Details } from "./styles";

class CoursesSection extends React.Component {
	render() {
		return (
			<Wrapper>
				<Details>Published 20 courses </Details>
				<WrapperCourses>
					<Course
						background="imgObj"
						Categories="Design"
						Title1="Modern Art"
						Title2="and Design"
						Details="10 lessons | 3 workshop"
						ImgStar="./images/star.png"
						Stars="Saved"
						ImgC="./images/rocket.png"
					/>
					<Course
						Categories="Skills"
						Title1="Presentation"
						Title2=""
						Details=" 10 lessons | 3 workshop10 lessons | 3 workshop  | 3 workshop10 lessons | 3 | 3 workshop10 lessons | 3
						 | 3 workshop10 lessons | 3 | 3 workshop10 lessons | 3 | 3 workshop10 lessons | 3"
						ImgStar="./images/star.png"
						Stars="Saved"
						ImgC="./images/presentation.png"
					/>
					<Course
						Categories="Technology"
						Title1="Artificial"
						Title2="Intelligence"
						Details=" 22 lessons | 10 workshop"
						ImgStar="./images/star.png"
						Stars="Saved"
						ImgC="./images/brain.png"
					/>
					<Course
						Categories="Business"
						Title1="About social media course"
						Title2=""
						Details=" 22 lessons | 10 workshop22 lessons | 10 workshop22 lessons | 10 workshop22 lessons |
							10 workshop22 lessons | 10 workshop22 lessons | 10 workshop22 lessons | 10 workshop22 lessons | 
							10 workshop22 lessons | 10 workshop22 lessons | 10 workshop22 lessons | 10 workshop22 lessons | 10 workshop"
						ImgStar=""
						Stars="Start in 10 days"
						ImgC=""
					/>
					<Course
						Categories="Technology"
						Title1="Green"
						Title2="Business"
						Details=" Start in 3 days"
						ImgStar="./images/star.png"
						Stars="Saved"
						ImgC="./images/books.png"
					/>
					<Course
						Categories="Desgin"
						Title1="User"
						Title2="Expirience"
						Details=" 22 lessons | 10 workshop"
						ImgStar="./images/star.png"
						Stars="Saved"
						ImgC="./images/rocket.png"
					/>
				</WrapperCourses>
			</Wrapper>
		);
	}
}

export default CoursesSection;
