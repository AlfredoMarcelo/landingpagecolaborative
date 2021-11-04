import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-lg-3 col-md-12 col-sm-12 col-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-12 col-sm-12 col-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-12 col-sm-12 col-12">
						<Card />
					</div>
					<div className="col-lg-3 col-md-12 col-sm-12 col-12">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
