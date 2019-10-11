import React from "react";
import { connect } from "react-redux";
import { fetchplan } from "../../actions/index";
import FitnessVideos from "./FitnessVideos";
import FoodDetails from "./FoodDetailsWhenCalled";
import UserDetails from './UserDetails';
class PlanShow extends React.Component {
	helpplease = () => {
		if (document.getElementById("inputvalueforfooddetails").value != null) {
			this.setState({
				inputvalueforfooddetails: document.getElementById(
					"inputvalueforfooddetails"
				).value
			});
		}
	};
	renderHelper() {
		return (
			<div>
				<label>Food Details</label>
				<input type='text' id='inputvalueforfooddetails'></input>
				<button onClick={this.helpplease}>submit</button>
			</div>
		);
	}
	render() {
		return (
			<div className='ui form'>
				<UserDetails/>
				<FoodDetails data={this.state.inputvalueforfooddetails} />
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		plan: state.plans[ownProps.match.params.id]
	};
};
export default connect(
	mapStateToProps,
	{ fetchplan }
)(PlanShow);
