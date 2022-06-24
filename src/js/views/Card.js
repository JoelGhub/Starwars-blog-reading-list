import React, {useState,useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({name,id,gender,hair_color,eye_color}) => {
   const {store, actions} =  useContext(Context);
   
//    console.log(store.planets);
     
// console.log(store.characters);
	return (
        
        <li style={{minWidth: "200px",width: "400px",height: "400px", margin:"0 20px"}} className="card" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png?20080824073021" className="card-img-top" alt="..."/>
             <div style={{width:"100%", height: "100%", padding:"10px", backgroundColor:"rgb(37, 37, 38)", color:"white"}} className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair Color: {hair_color}</p>
                <p className="card-text">Eye Color: {eye_color}</p>
                <Link to={"/single/"+id} className="btn btn-primary">Learn More</Link><button onClick={()=>actions.addFavorites(name)} className="m-2 w-25 btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></button>
             </div>
        </li>

	);
};