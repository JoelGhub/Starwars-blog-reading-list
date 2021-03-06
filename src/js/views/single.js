import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const [dataItem,setDataItem] = useState({})
	
	console.log(useParams());
	const {theid} = useParams();
    
	console.log(store.characters);
	

	return (
		<div className="jumbotron">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png?20080824073021" className="w-25 card-img-top" alt="..."/>
			<h1 className="display-4">{store.characters[theid]?.name}</h1>
			 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum, dolor ut molestie condimentum, eros diam porttitor sapien, ac bibendum nisl leo ut ligula. Aliquam quam lacus, volutpat vel viverra vitae, interdum ac leo. Aenean venenatis justo vitae nisl mollis, non lacinia odio imperdiet. Interdum.
			 </p>
			 <div className="text-danger">
			<hr className="m-auto w-75 my-4" />
			<ul className="list-unstyled d-flex">
				<li className="p-3"><strong>Name</strong> {store.characters[theid]?.name}</li>
				<li className="p-3"><strong>Birth Year</strong> {store.characters[theid]?.birth_year}</li>
				<li className="p-3"><strong>Gender</strong> {store.characters[theid]?.gender}</li>
				<li className="p-3"><strong>Height </strong>{store.characters[theid]?.height}</li>
				<li className="p-3"><strong>Skin_color</strong> {store.characters[theid]?.skin_color}</li>
				<li className="p-3"><strong>Eye color</strong> {store.characters[theid]?.eye_color}</li>
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

Single.propTypes = {
	match: PropTypes.object
};
