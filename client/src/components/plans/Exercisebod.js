import React from "react";
class Exercisebod extends React.Component {
    exerciseBasedOnDetails() {
        const {typeOfPerson,Age}=this.props;
        if(ttypeOfPerson!=undefined&&this.props.Age!=undefined)
        {
            if(typeOfPerson="Underweight" && (Age>15||Age<22))
            {

            }
        }
    }
    
    
    
    
    
    render() {
		console.log(this.props);
		return <div>Exercisebod</div>;
	}
}
export default Exercisebod;
