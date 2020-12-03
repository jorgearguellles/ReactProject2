import React from "react";
import styled from "styled-components";
import Course from "../components/Course";

const Wrapper = styled.div`
	width: 80vw;
	height: 80vh;
	background-color: #f3e2ef;
	padding: 20px;
`;

const WrapperCourses = styled.div`
	width: 80vw;
	height: 80vh;
	display: flex;
	flex-wrap: wrap;
	padding: 10px;
`;

const Details = styled.p`
	font-family: ruda;
`;

class Development extends React.Component {
	render() {
		return (
			<Wrapper>
				<Details>Published 20 courses </Details>
				<WrapperCourses>
					<Course
						Background={"white"}
						Categories="Design"
						Title1="Modern Art"
						Title2="and Design"
						Details="10 lessons | 3 workshop"
						ImgStar="./images/star.png"
						Stars="Saved"
						ImgC="./images/lamp.png"
					/>
					<Course
						Categories="Skills"
						Title1="Presentation"
						Title2=""
						Details=" 10 lessons | 3 workshop10 lessons | 3 workshop"
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
						 10 workshop 22 lessons | 10 workshop22 lessons | 10 workshop22 lessons | 10 workshop22 lessons 
						 | 10 workshop22 lessons | 10 workshop22 lessons | 10 workshop22 lessons | 10 workshop22 lessons |
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

export default Development;
