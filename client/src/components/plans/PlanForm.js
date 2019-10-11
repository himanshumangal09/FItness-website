import React from 'react';
import {Field,reduxForm} from 'redux-form';

class PlanForm extends React.Component{
    renderError({error,touched}) {
        if(touched&&error)
            {
                return(
                    <div className="ui error message">
                        <div className="header">
                            {error}
                        </div>
                    </div>
                );
            }
    }
    renderInput = ({input,label,meta})=>{
       const className=`field ${meta.error&&meta.touched ? 'error' : ''}`
        return(
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off"/>
            {this.renderError(meta)}
        </div>);
    }
    // renderPlan(formProps) {
    //     console.log(formProps)
    //     return(
    //     <div>
    //         <form>
    //             <input type="radio" name="plan" value="basic" checked/> basic<br/>
    //             <input type="radio" name="plan" value="intermediate"/> intermediate<br/>
    //             <input type="radio" name="plan" value="advance"/> advance  
    //         </form> 
    //     </div>);
    // }
    // renderSex(formProps) {
    //     console.log(formProps)
    //     return(
    //     <div>
    //         <form>
    //             <input type="radio" name="gender" value="male" checked/> Male<br/>
    //             <input type="radio" name="gender" value="female"/> Female<br/>
    //             <input type="radio" name="gender" value="other"/> Other  
    //         </form> 
    //     </div>);
    // }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render()
        {
        return (<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field name="Age" component={this.renderInput} label="Enter Age"/>
            <Field name="Weight"  component={this.renderInput} label="Enter Weight"/>
            <Field name="Sex"  component={this.renderInput} label="Enter Sex"/>
            <Field name="Height"  component={this.renderInput} label="Enter Height"/>
            <Field name="waist"  component={this.renderInput} label="Enter waist"/>
            <Field name="hip"  component={this.renderInput} label="Enter hip"/>
            <Field name="Name"  component={this.renderInput} label="Enter Name"/>
            <Field name="Plan"  component={this.renderInput} label="Enter Plan  Ex.  (basic,advance) "/>
            <button className="ui button primary">Submit</button>
        </form>);
        }
}
const validate = (formValues)=>{
    const error={};
    if(!formValues.Age)
    {
        error.Age='You must enter the Age';
        
    }    if(!formValues.Weight)
    {
        error.Weight='You must enter the weight';
        
    }
    if(!formValues.Height)
    {
        error.Height='You must enter the Height';
        
    }    if(!formValues.Sex)
    {
        error.Sex='You must enter the Sex';
        
    }    if(!formValues.Plan)
    {
        error.Plan='You must enter the Plan';
        
    }
    if(!formValues.Name)
    {
        error.Name='You must enter the Name';
        
    }
    return error;
};
export default reduxForm({
    form:'PlanForm',
    validate
})(PlanForm);