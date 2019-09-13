import React, { Component } from "react";
//import the components we will need
import AudiencesCard from "./AudiencesCard";
import AudiencesManager from "../../modules/AudiencesManager";

class AudiencesList extends Component {
  //define what this component needs to render
  state = {
    audiences: []
  };
loggedInUser = parseInt(sessionStorage.getItem("credentials"))
  componentDidMount() {
    console.log("AUDIENCE LIST: ComponentDidMount");
    //getAll from AudiencesManager and hang on to that data; put it in state
    AudiencesManager.getAll(this.loggedInUser)
        .then(audiences => {
            this.setState({
                audiences: audiences
        //we may want to rename as audiencesObj after audiences: 
      });
    });
  }
  
  deleteAudience = id => {
    AudiencesManager.delete(id).then(() => {
      AudiencesManager.getAll(this.loggedInUser).then(newAudiences => {
        this.setState({
            audiences: newAudiences
        });
      });
    });
  };

  render(){
    console.log("AudiencesList: Render");

    return (
        <>
            <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/audiences/new") }}>
                Add Audience
            </button>
            </section>
            <div className="container-cards">
                {this.state.audiences.map(audience => 
                    <AudiencesCard 
                         key={audience.id} 
                         audience={audience} 
                          deleteAudience={this.deleteAudience} 
                          {...this.props}
                    />
                )}
            </div>
        </>
        )
    }
}
export default AudiencesList;
