import React from "react";
class Exercisebod extends React.Component {
    exerciseBasedOnDetails() {
        const {typeOfPerson,Age}=this.props;
        if(typeOfPerson!=undefined&&Age!=undefined)
        {
            if(typeOfPerson="Underweight" && (Age>15||Age<22))
            {
                 return(<div>
                     exercise 1
                 </div>)   
            }
        }
    }
    
    
    
    
    
    render() {
		console.log(this.props);
		return <div>Exercisebod</div>;
	}
}
export default Exercisebod;
