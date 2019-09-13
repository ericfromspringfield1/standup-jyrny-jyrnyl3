import React, { Component } from "react";
//import the components we will need
import VenuesCard from "./VenuesCard";
import VenuesManager from "../../modules/VenuesManager";

class VenuesList extends Component {
  //define what this component needs to render
  state = {
    venues: []
  };
loggedInUser = parseInt(sessionStorage.getItem("credentials"))
  componentDidMount() {
    console.log("VENUES LIST: ComponentDidMount");
    //getAll from VenuessManager and hang on to that data; put it in state
    VenuesManager.getAll(this.loggedInUser)
        .then(venues => {
            this.setState({
                venues: venues
        //we may want to rename as venuesObj after venues: 
      });
    });
  }
  
  deleteVenue = id => {
    VenuesManager.delete(id).then(() => {
      VenuesManager.getAll(this.loggedInUser).then(newVenues => {
        this.setState({
            venues: newVenues
        });
      });
    });
  };

  render(){
    console.log("VenuesList: Render");

    return (
        <>
            <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/venues/new") }}>
                Add Venue
            </button>
            </section>
            <div className="container-cards">
                {this.state.venues.map(venue => 
                    <VenuesCard 
                         key={venue.id} 
                         venue={venue}
                          deleteVenue={this.deleteVenue} 
                          {...this.props}
                    />
                )}
            </div>
        </>
        )
    }
  
}
export default VenuesList; 
