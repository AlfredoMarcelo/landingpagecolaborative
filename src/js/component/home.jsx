import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";
//create your first component
const Home = () => {
	return (
		<>
			<header>
				<Navbar />
				<Jumbotron />
			</header>
			<main></main>

			
		</>
	);
};

export default Home;
