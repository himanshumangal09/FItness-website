import React from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import {fetchplans} from '../../actions/index'
class PlanList extends React.Component{
   componentDidMount() {
       this.props.fetchplans();
   }
   renderAdmin(plan) {
       if(plan.userId===this.props.currentUserId)
       {
           return(<div className="right floated content">
            <Link  to={`/plan/edit/${plan.id}`} className=" ui button primary">Edit</Link>
            <Link to={`/plan/delete/${plan.id}`} className=" ui button negative">Delete</Link>
           </div>);
       }
   }
   renderCreate(){
       if(this.props.isSignedIn)
       {
            return(<div style={{textAlign:'right'}}>
                <Link to="/plan/new" className="ui button primary">Create Plan</Link>
            </div>);
       }
   }
   renderList(){
       return this.props.plans.map(plan=>{
          return( <div className="item" key={plan.id} >
                    {this.renderAdmin(plan)}
               <i className="large middle aligned icon user circle outline"/>
               <div className="content">
                    <Link to={`/plan/show/${plan.id}`} className="header">
                    {plan.Name}
                    </Link>
                   <div className="description">
                       {plan.Plan}
                    </div>
               </div>
           </div>
           );
       })
   }
    render() {
    return (
    <div>
        <h2>Plans</h2>
        <div className="ui celled list">
            {this.renderList()}
        </div>
        {this.renderCreate()}
    </div>
    );
}
}
const mapStateToProps = (state) =>{
return {plans:Object.values(state.plans),
currentUserId:state.auth.userId,
isSignedIn:state.auth.isSignedIn
    }
}
export default connect(mapStateToProps,{fetchplans})(PlanList);