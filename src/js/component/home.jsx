import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
		</>
	);
};

export default Home;
