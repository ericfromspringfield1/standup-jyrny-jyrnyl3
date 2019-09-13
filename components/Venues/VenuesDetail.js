import React, { Component } from 'react';
import VenuesManager from '../../modules/VenuesManager';

class VenuesDetail extends Component {

  state = {
      venue: "",
      city: "",
      state: "",
      capacity: "",
      loadingStatus: true, 
  }

  componentDidMount(){
    console.log("VenueDetail: ComponentDidMount");
    //get(id) from VenuesManager and hang on to the data; put it into state
    VenuesManager.get(this.props.venueId)
    .then((venue) => {
      this.setState({
        venue: venue.venue,
        city: venue.city,
        state: venue.state,
        capacity: venue.capacity,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in VenuesManager and re-direct to the venue list.
    this.setState({loadingStatus: true})
    VenuesManager.delete(this.props.venueId)
    .then(() => this.props.history.push("/venues"))
}

  render() {
    return (
        <>
      <div className="card">
          {this.props.venue.venue} {this.props.venue.city} {this.props.venue.state} {this.props.venue.capacity}
        <button type="button" onClick={() => { this.props.history.push(`/venues${this.props.venue.id}/edit`) }}>Edit</button>
        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Venue</button>
      </div>
        </>
        
    );
  }
}

export default VenuesDetail;  
