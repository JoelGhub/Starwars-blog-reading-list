import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = () => {
	const { store, actions } = useContext(Context);
	const [dataItem,setDataItem] = useState({})
	
	console.log(useParams());
	const {theid} = useParams();
    
	// console.log(store.characters);
	

	return (
		<div className="jumbotron">
			<img src="https://sm.ign.com/t/ign_me/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_nxy8.1080.jpg" className="w-25 card-img-top" alt="..."/>
			<h1 className="display-4">{store.planets[theid]?.name}</h1>
			 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum, dolor ut molestie condimentum, eros diam porttitor sapien, ac bibendum nisl leo ut ligula. Aliquam quam lacus, volutpat vel viverra vitae, interdum ac leo. Aenean venenatis justo vitae nisl mollis, non lacinia odio imperdiet. Interdum.
			 </p>
			 <div className="text-danger">
			<hr className="m-auto w-75 my-4" />
			<ul className="list-unstyled d-flex">
				<li className="p-3"><strong>Name</strong> {store.planets[theid]?.name}</li>
				<li className="p-3"><strong>Climate</strong> {store.planets[theid]?.climate}</li>
				<li className="p-3"><strong>Population</strong> {store.planets[theid]?.population}</li>
				<li className="p-3"><strong>Orbital Period </strong>{store.planets[theid]?.orbital_period}</li>
				<li className="p-3"><strong>Rotation Period</strong> {store.planets[theid]?.rotation_period}</li>
				<li className="p-3"><strong>Diameter</strong> {store.planets[theid]?.diameter}</li>
			</ul>
			</div>
			<hr/>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
		
};

SinglePlanets.propTypes = {
	match: PropTypes.object
};
