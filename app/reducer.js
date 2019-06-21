export default (state,action)=>{
	if(state == undefined){
		state = {"r":0,"g":0,"b":0}
	}
	if(action.type == "GAIBIANR"){
		return {...state, "r": state.r +10};
	}

	return state;
}