import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchplan,editplan} from '../../actions';
import PlanForm from './PlanForm';
class PlanEdit extends React.Component{
componentDidMount() {
    this.props.fetchplan(this.props.match.params.id);
}
onSubmit = (formValues) =>{
    this.props.editplan(this.props.match.params.id,formValues)
    console.log(formValues)
}
    render() {  
        if(!this.props.plan)
            {
        return (<div>Loading ...</div>);
            }
        return(
            <div>
                <h3>
                    Edit a Plan
                </h3>
                <PlanForm 
                initialValues={_.pick(this.props.plan,"Age","Weight","Sex","Height","Name","Plan")}
                 onSubmit={this.onSubmit}/>
            </div>);
}
}
const mapStateToProps = (state,ownProps) =>{
    //console.log(state.plans[ownProps.match.params.id])
    return {plan:state.plans[ownProps.match.params.id]}

}
export default connect(mapStateToProps,{fetchplan,editplan})(PlanEdit);