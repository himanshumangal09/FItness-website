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
	// 	getFoodDetails() {
	// 		axios({
	// 			method: "GET",
	// 			url: "https://food-calorie-data-search.p.rapidapi.com/api/search",
	// 			headers: {
	// 				"content-type": "application/octet-stream",
	// 				"x-rapidapi-host": "food-calorie-data-search.p.rapidapi.com",
	// 				"x-rapidapi-key": "4fce675d58msh4c5b8d7782ff444p1f819fjsn503f83c9b052"
	// 			},
	// 			params: {
	// 				keyword: `${this.state.inputfoodvalue}`
	// 			}
	// 		})
	// 			.then(response => {
	// 				console.log(this.state.inputfoodvalue);
	// 				console.log(response.data[0]);
	// 				if (
	// 					response.data == [] ||
	// 					response.data == undefined ||
	// 					response.data == null
	// 				) {
	// 					return alert("NO DATA LOADED YET!!");
	// 				}
	// 				{
	// 					this.setState({
	// 						calcium: response.data[0].calcium,
	// 						carbohydrt: response.data[0].carbohydrt,
	// 						cholestrl: response.data[0].cholestrl,
	// 						energ_kcal: response.data[0].energ_kcal,
	// 						iron: response.data[0].iron,
	// 						magnesium: response.data[0].magnesium,
	// 						manganese: response.data[0].manganese,
	// 						phosphorus: response.data[0].phosphorus,
	// 						potassium: response.data[0].potassium,
	// 						protein: response.data[0].protein,
	// 						sodium: response.data[0].sodium,
	// 						vit_b6: response.data[0].vit_b6,
	// 						vit_b12: response.data[0].vit_b12,
	// 						vit_c: response.data[0].vit_c,
	// 						vit_d: response.data[0].vit_d,
	// 						vit_e: response.data[0].vit_e,
	// 						vit_k: response.data[0].vit_k,
	// 						vit_a_iu: response.data[0].vit_a_iu,
	// 						water: response.data[0].water
	// 					});
	// 				}
	// 			})
	// 			.catch(error => {
	// 				console.log("error occuried try again by clicking the button again ");
	// 				{
	// 					this.renderErrors();
	// 				}
	// 			});
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
	// 				}
	// 				if (
	// 					(this.state.Sex == "m" && this.state.waist >= 40) ||
	// 					(this.state.Sex == "f" && this.state.waist >= 35)
	// 				) {
	// 					this.setState({ diseaseRisk: "Very high" });
	// 				}
	// 			}
	// 			if (bmi > 35.0 && bmi < 39.9) {
	// 				this.setState({ typeOfPerson: "Obesity class II" });
	// 				if (
	// 					(this.state.Sex == "m" && this.state.waist <= 40) ||
	// 					(this.state.Sex == "f" && this.state.waist <= 35)
	// 				) {
	// 					this.setState({ diseaseRisk: "very High" });
	// 				}
	// 				if (
	// 					(this.state.Sex == "m" && this.state.waist >= 40) ||
	// 					(this.state.Sex == "f" && this.state.waist >= 35)
	// 				) {
	// 					this.setState({ diseaseRisk: "very high" });
	// 				}
	// 			}
	// 			if (bmi > 40) {
	// 				this.setState({ typeOfPerson: "Extreme Obesity" });
	// 				if (
	// 					(this.state.Sex == "m" && this.state.waist <= 40) ||
	// 					(this.state.Sex == "f" && this.state.waist <= 35)
	// 				) {
	// 					this.setState({ diseaseRisk: "Extreme High" });
	// 				}
	// 				if (
	// 					(this.state.Sex == "m" && this.state.waist <= 40) ||
	// 					(this.state.Sex == "f" && this.state.waist <= 35)
	// 				) {
	// 					this.setState({ diseaseRisk: "Extreme High" });
	// 				}
	// 			}
	// 		}
	// 	}
	// 	renderDetails() {
	// 		return (
	// 			<div className='ui segments'>
	// 				<div className='ui segment'>
	// 					<p>Plan:{this.state.Plan}</p>
	// 				</div>
	// 				<div className='ui red segment'>
	// 					<p>Name:{this.state.Name}</p>
	// 				</div>
	// 				<div className='ui blue segment'>
	// 					<p>Age(in yrs):{this.state.Age}</p>
	// 				</div>
	// 				<div className='ui green segment'>
	// 					<p>Weight(in KG):{this.state.Weight}</p>
	// 				</div>
	// 				<div className='ui yellow segment'>
	// 					<p> Height(in cm):{this.state.Height}</p>
	// 				</div>
	// 				<div className='ui yellow segment'>
	// 					<p> Waist(in cm): {this.state.waist}</p>
	// 				</div>
	// 				<div className='ui yellow segment'>
	// 					<p>Hip(in cm):{this.state.hip}</p>
	// 				</div>
	// 				<div className='ui yellow segment'>
	// 					<p>gender: {this.state.Sex}</p>
	// 				</div>
	// 				<div className='ui blue segment'>
	// 					<p>BMI: {this.state.bmi}</p>
	// 				</div>
	// 				<div className='ui blue segment'>
	// 					<p>According to BMI: {this.state.typeOfPerson}</p>
	// 				</div>
	// 				<div className='ui blue segment'>
	// 					<p>
	// 						Disease Risk (like type 2 diabetes,hypertension,CVD):{" "}
	// 						{this.state.diseaseRisk}
	// 					</p>
	// 				</div>
	// 			</div>
	// 		);
	// 	}
	// 	renderFoodDetails() {
	// 		if (this.state.calcium === 0 || this.state.calcium === undefined) {
	// 			return (
	// 				<div className='ui blue segment'>
	// 					Searched Result Will Appear here !!
	// 				</div>
	// 			);
	// 		}
	// 		{
	// 			return (
	// 				<div className='ui segments'>
	// 					<div className='ui segment'>
	// 						<p>calcium:{this.state.calcium}</p>
	// 					</div>
	// 					<div className='ui red segment'>
	// 						<p>carbohydrt:{this.state.carbohydrt}</p>
	// 					</div>
	// 					<div className='ui blue segment'>
	// 						<p>cholestrl:{this.state.cholestrl}</p>
	// 					</div>
	// 					<div className='ui green segment'>
	// 						<p>energy kcal:{this.state.energ_kcal}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p> iron:{this.state.iron}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p> magnesium: {this.state.magnesium}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p>manganese:{this.state.manganese}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p>phosphorus: {this.state.phosphorus}</p>
	// 					</div>
	// 					<div className='ui red segment'>
	// 						<p>potassium:{this.state.potassium}</p>
	// 					</div>
	// 					<div className='ui blue segment'>
	// 						<p>protein:{this.state.protein}</p>
	// 					</div>
	// 					<div className='ui green segment'>
	// 						<p>sodium:{this.state.sodium}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p> vit_a_iu:{this.state.vit_a_iu}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p> vit_b6: {this.state.vit_b6}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p>vit_b12:{this.state.vit_b12}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p>vit_c: {this.state.vit_c}</p>
	// 					</div>
	// 					<div className='ui red segment'>
	// 						<p>vit_d:{this.state.vit_d}</p>
	// 					</div>
	// 					<div className='ui blue segment'>
	// 						<p>vit_e:{this.state.vit_e}</p>
	// 					</div>
	// 					<div className='ui green segment'>
	// 						<p>vit_k:{this.state.vit_k}</p>
	// 					</div>
	// 					<div className='ui yellow segment'>
	// 						<p> water:{this.state.water}</p>
	// 					</div>
	// 				</div>
	// 			);
	// 		}
	// 	}
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
				{/* <div className='field'>
					<label className='ui   text'>
						Place for Exercise (inside or outside)
					</label>
					<input style={{ width: 900 }} type='text' id='input2'></input>
				</div>
				<button
					className='ui  button primary'
					onClick={() => {
						this.setState({
							inputfoodvalue: document.getElementById("input").value,
							placeForExercise:
								document.getElementById("input2").value || "inside"
						});
					}}
				>
					Submit
				</button> } */}
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
