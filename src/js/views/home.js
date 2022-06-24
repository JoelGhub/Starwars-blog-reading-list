import React, {useState,useContext} from "react";
import "../../styles/home.css";
import { Card } from "./Card";
import { Planets } from "./Planets";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} =  useContext(Context);
	// console.log(store.characters);
	// console.log(store.dataItems);
	
	return (
		<>
		<h2 className="text-danger">Characters</h2>
		<div>
			<ul style={{overflowX:"auto"}} className="p-3 d-flex">
		
				{store.characters.map((item,index)=><Card className="d-flex" name={item.name} gender={item.gender} hair_color={item.hair_color} eye_color={item.eye_color} id={index} key={index}/>)}
				
			</ul>
		</div>	
		<h2 className="text-danger">Planets</h2>
		<div>
			<ul style={{overflowX:"auto"}} className="p-3 d-flex">
		
				{store.planets.map((item,index)=><Planets population={item.population} terrain={item.terrain} name={item.name} id={index} key={index}/>)}
				
			</ul>
		</div>	
		</>
	);
}
