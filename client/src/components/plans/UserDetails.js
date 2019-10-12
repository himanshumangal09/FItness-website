import React from "react";
import Exercisebod from "./Exercisebod";
const bodyMassIndex = require("body-mass-index");
class UserDetails extends React.Component {
	render() {
		if (!this.props.data) {
			console.log(this.props);
			return <div>Loading</div>;
		}
		{
			var {
				Sex,
				Plan,
				Weight,
				Height,
				waist,
				diseaseRisk,
				Name,
				Age,
				hip,
				typeOfPerson
			} = this.props.data;
			const bmi = bodyMassIndex(`${Weight} kg`, `${Height} cm`);
			if (bmi < 18.5) {
				typeOfPerson = "Underweight";
				diseaseRisk = "No Risk ";
			}
			if (bmi > 18.5 && bmi < 24.9) {
				typeOfPerson = "Normal";
				diseaseRisk = "No Risk";
			}
			if (bmi > 25.0 && bmi < 29.9) {
				typeOfPerson = "Overweight";
				if ((Sex == "m" && waist <= 40) || (Sex == "f" && waist <= 35)) {
					diseaseRisk = "Increased";
				}
				if ((Sex == "m" && waist >= 40) || (Sex == "f" && waist >= 35)) {
					diseaseRisk = "High ";
				}
			}
			if (bmi > 30.0 && bmi < 34.9) {
				typeOfPerson = "Obesity class I";
				if ((Sex == "m" && waist <= 40) || (Sex == "f" && waist <= 35)) {
					diseaseRisk = "high ";
				}
				if ((Sex == "m" && waist >= 40) || (Sex == "f" && waist >= 35)) {
					diseaseRisk = "Very high";
				}
			}
			if (bmi > 35.0 && bmi < 39.9) {
				typeOfPerson = "Obesity class II";
				if ((Sex == "m" && waist <= 40) || (Sex == "f" && waist <= 35)) {
					diseaseRisk = "very High";
				}
				if ((Sex == "m" && waist >= 40) || (Sex == "f" && waist >= 35)) {
					diseaseRisk = "very high";
				}
			}
			if (bmi > 40) {
				typeOfPerson = "Extreme Obesity";
				if ((Sex == "m" && waist <= 40) || (Sex == "f" && waist <= 35)) {
					diseaseRisk = "Extreme High";
				}
				if ((Sex == "m" && waist <= 40) || (Sex == "f" && waist <= 35)) {
					diseaseRisk = "Extreme High";
				}
			}
			return (
				<div>
					<div className='ui segments'>
						<div className='ui segment'>
							<p>Plan:{Plan}</p>
						</div>
						<div className='ui red segment'>
							<p>Name:{Name}</p>
						</div>
						<div className='ui blue segment'>
							{" "}
							<p>Age(in yrs):{Age}</p>
						</div>
						<div className='ui green segment'>
							{" "}
							<p>Weight(in KG):{Weight}</p>
						</div>
						<div className='ui yellow segment'>
							<p> Height(in cm):{Height}</p>
						</div>
						<div className='ui yellow segment'>
							<p> Waist(in cm): {waist}</p>
						</div>
						<div className='ui yellow segment'>
							<p>Hip(in cm):{hip}</p>
						</div>
						<div className='ui yellow segment'>
							<p>gender: {Sex}</p>
						</div>
						<div className='ui blue segment'>
							<p>BMI: {bmi}</p>
						</div>
						<div className='ui blue segment'>
							<p>According to BMI: {typeOfPerson}</p>
						</div>
						<div className='ui blue segment'>
							<p>
								Disease Risk (like type 2 diabetes,hypertension,CVD):{" "}
								{diseaseRisk}
							</p>
						</div>
					</div>
					<Exercisebod typeOfPerson={typeOfPerson} Age={Age} />
				</div>
			);
		}
	}
}

export default UserDetails;
