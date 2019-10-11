import React from "react";
import { connect } from "react-redux";
import { fetchplan } from "../../actions/index";
import FitnessVideos from "./FitnessVideos";
import FoodDetails from "./FoodDetailsWhenCalled";
const bodyMassIndex = require("body-mass-index");
const axios = require("axios");
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
	// componentDidUpdate() {
	// 	this.getUserDetails();
	// }
	// 	renderErrors() {
	// 		console.log("Null value or click again");
	// 	}
	// 	getUserDetails() {
	// 		if (!this.props.plan) {
	// 			return <div>Loading</div>;
	// 		}
	// 		this.setState({
	// 			Plan: this.props.plan.Plan,
	// 			Age: this.props.plan.Age,
	// 			Weight: this.props.plan.Weight,
	// 			Height: this.props.plan.Height,
	// 			Name: this.props.plan.Name,
	// 			Sex: this.props.plan.Sex,
	// 			waist: this.props.plan.waist,
	// 			hip: this.props.plan.hip
	// 		});

	// 		{
	// 			const bmi = bodyMassIndex(
	// 				`${this.state.Weight} kg`,
	// 				`${this.state.Height} cm`
	// 			);

	// 			if (bmi < 18.5) {
	// 				this.setState({ typeOfPerson: "Underweight" });
	// 				this.setState({ diseaseRisk: "No Risk " });
	// 			}
	// 			if (bmi > 18.5 && bmi < 24.9) {
	// 				this.setState({ typeOfPerson: "Normal" });
	// 				this.setState({ diseaseRisk: "No Risk" });
	// 			}
	// 			if (bmi > 25.0 && bmi < 29.9) {
	// 				this.setState({ typeOfPerson: "Overweight" });
	// 				if (
	// 					(this.state.Sex == "m" && this.state.waist <= 40) ||
	// 					(this.state.Sex == "f" && this.state.waist <= 35)
	// 				) {
	// 					this.setState({ diseaseRisk: "Increased" });
	// 				}
	// 				if (
	// 					(this.state.Sex == "m" && this.state.waist >= 40) ||
	// 					(this.state.Sex == "f" && this.state.waist >= 35)
	// 				) {
	// 					this.setState({ diseaseRisk: "High " });
	// 				}
	// 			}
	// 			if (bmi > 30.0 && bmi < 34.9) {
	// 				this.setState({ typeOfPerson: "Obesity class I" });
	// 				if (
	// 					(this.state.Sex == "m" && this.state.waist <= 40) ||
	// 					(this.state.Sex == "f" && this.state.waist <= 35)
	// 				) {
	// 					this.setState({ diseaseRisk: "high " });
	 				}
	 				if (
						(this.state.Sex == "m" && this.state.waist >= 40) ||
	 					(this.state.Sex == "f" && this.state.waist >= 35)
	 				) {
	 					this.setState({ diseaseRisk: "Very high" });
	 				}
	 			}
	 			if (bmi > 35.0 && bmi < 39.9) {
				this.setState({ typeOfPerson: "Obesity class II" });
	 				if (
						(this.state.Sex == "m" && this.state.waist <= 40) ||
	 					(this.state.Sex == "f" && this.state.waist <= 35)
	 				) {
						this.setState({ diseaseRisk: "very High" });
	 				}
					if (
	 					(this.state.Sex == "m" && this.state.waist >= 40) ||
						(this.state.Sex == "f" && this.state.waist >= 35)
	 				) {
	 					this.setState({ diseaseRisk: "very high" });
	 				}
	 			}
	 			if (bmi > 40) {
	 				this.setState({ typeOfPerson: "Extreme Obesity" });
	 				if (
					(this.state.Sex == "m" && this.state.waist <= 40) ||
	 					(this.state.Sex == "f" && this.state.waist <= 35)
	 				) {
					this.setState({ diseaseRisk: "Extreme High" });
	 				}
					if (
	 					(this.state.Sex == "m" && this.state.waist <= 40) ||
	 					(this.state.Sex == "f" && this.state.waist <= 35)
	 				) {
	 					this.setState({ diseaseRisk: "Extreme High" });
	 				}
	 			}
	 		}
	 	}
	 	renderDetails() {
	 		return (
	 			<div className='ui segments'>
	 				<div className='ui segment'>
	 					<p>Plan:{this.state.Plan}</p>
	 				</div>
	 				<div className='ui red segment'>
	 					<p>Name:{this.state.Name}</p>
	 				</div>
	 				<div className='ui blue segment'> 					<p>Age(in yrs):{this.state.Age}</p>
 				</div>
	 				<div className='ui green segment'>					<p>Weight(in KG):{this.state.Weight}</p>
	 				</div>
	 				<div className='ui yellow segment'>
	 					<p> Height(in cm):{this.state.Height}</p>
	 				</div>
	 				<div className='ui yellow segment'>
	 					<p> Waist(in cm): {this.state.waist}</p>
	 				</div>
	 				<div className='ui yellow segment'>
						<p>Hip(in cm):{this.state.hip}</p>
	 				</div>
					<div className='ui yellow segment'>
	 					<p>gender: {this.state.Sex}</p>
	 				</div>
	 				<div className='ui blue segment'>
	 					<p>BMI: {this.state.bmi}</p>
	 				</div>
 				<div className='ui blue segment'>
					<p>According to BMI: {this.state.typeOfPerson}</p>
	 				</div>
	 				<div className='ui blue segment'>
	 					<p>
 						Disease Risk (like type 2 diabetes,hypertension,CVD):{" "}
					{this.state.diseaseRisk}
	 					</p>
			</div>
 			</div>
	 		);
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
			<div className='orm'>
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
