import React from 'react';
import Modal from "../Modal";
import history from "../../history";
import {fetchplan,deleteplan} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
class PlanDelete extends React.Component{
    componentDidMount(){
        console.log(this.props)
        this.props.fetchplan(this.props.match.params.id);
    }
    renderActions() {
        const {id} =this.props.match.params;
    return(
        <React.Fragment>
            <button onClick={()=>this.props.deleteplan(id)} className=" ui button negative">Delete</button>
            <Link className=" ui button" to="/"  >Cancel</Link>
        </React.Fragment>
    );
    }
    renderContent() {
        if(!this.props.plan)
        {
            return 'Are you sure you want to Delete the Plan ?'
        }
        return `Are you sure you want to Delete the Plan  with Plan:${this.props.plan.Age}`
    }
    render(){
    return (
        <Modal 
        title="Delete Plan"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={()=> history.push('/')}
        />);
}
}
const mapStateToprops = (state,ownProps) =>{
    return {
        plan:state.plans[ownProps.match.params.id]
    }
}
export default connect(mapStateToprops,{fetchplan,deleteplan})(PlanDelete); 