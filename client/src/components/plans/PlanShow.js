import React from "react";
import { connect } from "react-redux";
import { fetchplan } from "../../actions/index";
import FitnessVideos from "./FitnessVideos";
import FoodDetails from "./FoodDetailsWhenCalled";
import UserDetails from "./UserDetails";
class PlanShow extends React.Component {
	state = {
		inputvalueforfooddetails: null
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
			<div>
			<UserDetails data={this.props.plan}/>
			<FitnessVideos/>
			<FoodDetails ata={this.state.inputvalueforfooddetails}></FoodDetails>
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
