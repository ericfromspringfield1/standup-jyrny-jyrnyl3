import React, { Component } from 'react';
import './Venues.css'
import { Link } from "react-router-dom";

class VenuesCard extends Component {
  render() {
    return (
      <div className="card">
          {this.props.venue.venue} {this.props.venue.city} {this.props.venue.state}
          <picture>
            <img src={require('./charlieChaplin.png')} alt="Chaplin" />
          </picture>
          <button type="button" onClick={() => this.props.deleteVenue(this.props.venue.id)}>Delete Venue</button>
          <button type="button" onClick={() => {this.props.history.push(`/venues/${this.props.venue.id}/edit`)}}>Edit</button>
          </div>
    );
  }
}

export default VenuesCard; 
