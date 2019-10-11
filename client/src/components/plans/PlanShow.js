import React from "react";
import { connect } from "react-redux";
import { fetchplan } from "../../actions/index";
import FitnessVideos from "./FitnessVideos";
import FoodDetails from "./FoodDetailsWhenCalled";
import UserDetails 
class PlanShow extends React.Component {
	state = {
		inputfoodvalue: null,
		inputvalueforfooddetails: null,
		bmi: 0,
		Age: 0,
		Weight: 0,
		Height: 0,
		Name: 0,
		Sex: 0,
		Plan: 0,
		waist: 0,
		hip: 0,
		typeOfPerson: 0,
		diseaseRisk: 0
	};
	componentDidMount() {
		this.props.fetchplan(this.props.match.params.id);
	}
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
		if (!this.props.plan) {
			return <div>Loading</div>;
		}
		return (
			<div className='ui form'>
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
