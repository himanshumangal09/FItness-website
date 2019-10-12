import React from "react";
class Exercisebod extends React.Component {
	exerciseBasedOnDetails() {
		const { typeOfPerson, Age } = this.props;
		if (typeOfPerson != undefined && Age != undefined) {
			if ((typeOfPerson == "Underweight" && (Age > 15 || Age < 22))) {
				return (
					<div>
						<div>exercise 1</div>
						<div>exercise 2</div>
						<div>exercise 3</div>
					</div>
				);
            }
            if ((typeOfPerson == "Underweight" && (Age > 22 || Age < 30))) {
				return (
					<div>
						<div>exercise 4</div>
						<div>exercise 5</div>
						<div>exercise 6</div>
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
