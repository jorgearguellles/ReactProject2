import React from "react";
import { WrapperSearchBell, Search, ImgBell } from "./styles";

const Bell = "./images/bell.png";

class SearchBell extends React.Component {
	render() {
		return (
			<WrapperSearchBell>
				<Search placeholder="Search" />
				<ImgBell src={Bell} />
			</WrapperSearchBell>
		);
	}
}

export default SearchBell;
