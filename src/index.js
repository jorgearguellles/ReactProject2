import React from "react";
import ReactDOM from "react-dom";

import Perfil from "./components/Perfil";

ReactDOM.render(
	<React.StrictMode>
		<Perfil nameUser="Jorge Argüelles" detailsUser="Coursebool" />
	</React.StrictMode>,
	document.getElementById("root")
);
