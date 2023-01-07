import React from "react";
import MyNavbar from "./navbar.jsx";
import Jumbo from "./jumbotron.jsx";
import Card from "./card.jsx";


const Home = () => {
	return (
		<>
		<MyNavbar/>
		<Jumbo/>
		<div>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
		
		
		</>

	);
};

export default Home;
