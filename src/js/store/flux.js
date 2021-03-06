
const getState = ({ getStore, getActions, setStore }) => {
	

	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters : [],
			planets : [],
			favorites : [],
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getCharacters:() => {
				fetch("https://swapi.dev/api/people")
					.then(res => res.json())
					.then(data => setStore({characters: data.results}))
					
			 },
			// getCharactersId:(index) => {
			// 	fetch("https://swapi.dev/api/people/"+index)
			// 		.then(res => res.json())
					
			// 		.then(data => setStore({index: data.results}))
					
			// },
			getPlanets:() => {
				fetch("https://swapi.dev/api/planets")
					.then(res => res.json())
					.then(data => setStore({planets: data.results}))
					
			},
			addFavorites:(name) =>{
				const store = getStore()
				
			
					setStore({favorites: store.favorites.concat(name)})
					
			},
			
			deleteFavorites:(id) =>{
				const store = getStore()
				
				setStore({favorites: store.favorites.filter((item,index) => index !== id)})
				

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
