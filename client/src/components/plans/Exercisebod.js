import React from "react";
class Exercisebod extends React.Component {
	exerciseBasedOnDetails() {
		const { typeOfPerson, Age } = this.props;
		if (typeOfPerson != undefined && Age != undefined) {
			if (typeOfPerson == "Underweight" && (Age > 15 || Age < 22)) {
				return (
					<div>
						<div>exercise 1</div>
						<div>exercise 2</div>
						<div>exercise 3</div>
					</div>
				);
			}
			if (typeOfPerson == "Underweight" && (Age > 22 || Age < 30)) {
				return (
					<div>
						<div>exercise 4</div>
						<div>exercise 5</div>
						<div>exercise 6</div>
					</div>
				);
			}
			if (typeOfPerson == "Underweight" && (Age > 30)) {
				return (
					<div>
						<div>exercise 7</div>
						<div>exercise 8</div>
						<div>exercise 9</div>
					</div>
				);
			}
			if (typeOfPerson = "Normal"&& (Age > 15 || Age < 22)) {
				return (
					<div>
						<div>exercise 10</div>
						<div>exercise 11</div>
						<div>exercise 12</div>
					</div>
				);
			}
			if (typeOfPerson = "Normal"&& (Age > 22|| Age < 30)) {
				return (
					<div>
						<div>exercise 13</div>
						<div>exercise 14</div>
						<div>exercise 15</div>
					</div>
				);
			}
			if (typeOfPerson = "Normal"&& (Age >30) ){
				return (
					<div>
						<div>exercise 16</div>
						<div>exercise 17</div>
						<div>exercise 18</div>
					</div>
				);
			}
			if (	typeOfPerson = "Overweight"&& (Age > 15 || Age < 22)) {
				return (
					<div>
						<div>exercise 19</div>
						<div>exercise 20</div>
						<div>exercise 21</div>
					</div>
				);
			}
			if (	typeOfPerson = "Overweight"&& (Age > 22 || Age < 30)) {
				return (
					<div>
						<div>exercise 22</div>
						<div>exercise 23</div>
						<div>exercise 24</div>
					</div>
				);
			}
			if (	typeOfPerson = "Overweight"&& (Age > 30)) {
				return (
					<div>
						<div>exercise 25</div>
						<div>exercise 26</div>
						<div>exercise 27</div>
					</div>
				);
			}
		}
	}
	render() {
		console.log(this.props);
		return <div>{this.exerciseBasedOnDetails()}</div>;
	}
}
export default Exercisebod;
