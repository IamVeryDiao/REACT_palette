import React from "react";
import {connect} from "react-redux";
class App extends React.Component{
	constructor({r,g,b}){
		super();
	}
	render(){
		return (
			<div>
				<div className="box" style={{"backgroundColor": `rgb(${this.props.r}, ${this.props.g}, ${this.props.b}`}}></div>
				<button onClick={this.props.gaibianr}>press me</button>
			</div>
		)

	}

}

export default connect(
	(state)=> {
		return {
			"r" : state.r,
			"g" : state.g,
			"b" : state.b
		}
	},
	(dispatch) =>{
		return {
			"gaibianr" : function(){
				console.log("gaibianr");
				dispatch({"type" : "GAIBIANR"});
			}
		}
	}





)(App);