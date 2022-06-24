import React, {useState,useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = ({name,id,population,terrain}) => {
   const {store, actions} =  useContext(Context);
  
//    console.log(store.planets);
     
// console.log(store.characters);
	return (
        <>

		<li style={{minWidth: "200px",width: "400px",height: "400px", margin:"0 20px"}} className="card">
            <img src="https://sm.ign.com/t/ign_me/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_nxy8.1080.jpg" className="card-img-top" alt="..."/>
             <div style={{width:"100%" ,height: "100%", padding:"10px", backgroundColor:"rgb(37, 37, 38)", color:"white"}} className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Population: {population}</p>
                <p className="card-text">Terrain: {terrain}</p>
                <Link to={"/singlePlanets/"+id} className="btn btn-primary">Learn More</Link>
             </div>
        </li>
      
        </>
	);
};