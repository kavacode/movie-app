export const setSearchQuery = (query) => ({
	type: "SET_SEARCH_QUERY",
	payload: query,
 });
 const initialState = {
	searchQuery: "",
 };
 
 const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	  case "SET_SEARCH_QUERY":
		 return {
			...state,
			searchQuery: action.payload,
		 };
	  default:
		 return state;
	}
 };
 
 export default rootReducer;