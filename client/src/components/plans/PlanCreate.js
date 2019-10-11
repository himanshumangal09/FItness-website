import React from 'react';
import {connect } from 'react-redux';
import {createPlan} from '../../actions/index';
import PlanForm from './PlanForm';
class PlanCreate extends React.Component{
    onSubmit = (formValues) => {
        this.props.createPlan(formValues)
    }
    render()
        {
        return (<div>
            <h3>Create a Plan</h3>
            <PlanForm onSubmit={this.onSubmit}/>
        </div>);
        }
}
export default connect(null,{createPlan})(PlanCreate);