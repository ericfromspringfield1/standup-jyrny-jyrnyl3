import React, { Component } from "react";
//import the components we will need
import GigsCard from "./GigsCard";
import GigsManager from "../../modules/GigsManager";

class GigsList extends Component {
  //define what this component needs to render
  state = {
    gigs: []
  };
loggedInUser = parseInt(sessionStorage.getItem("credentials"))
  componentDidMount() {
    console.log("GIG LIST: ComponentDidMount");
    //getAll from GigsManager and hang on to that data; put it in state
    GigsManager.getAll(this.loggedInUser)
        .then(gigs => {
            this.setState({
                gigs: gigs
        //we may want to rename as gigsObj after gigs: 
      });
    });
  }
  
  deleteGig = id => {
    GigsManager.delete(id).then(() => {
      GigsManager.getAll(this.loggedInUser).then(newGigs => {
        this.setState({
            gigs: newGigs
        });
      });
    });
  };

  render(){
    console.log("GigsList: Render");

    return (
        <>
            <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/gigs/new") }}>
                Add Gig
            </button>
            </section>
            <div className="container-cards">
                {this.state.gigs.map(gig => 
                    <GigsCard 
                         key={gig.id} 
                         gig={gig} 
                          deleteGig={this.deleteGig} 
                          {...this.props}
                    />
                )}
            </div>
        </>
        )
    }
  





  
}
export default GigsList; 
