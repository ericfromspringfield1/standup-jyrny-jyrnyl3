import React, { Component } from 'react';
import './Audiences.css'
import { Link } from "react-router-dom";

class AudiencesCard extends Component {
  render() {
    return (
      <div className="card">
          {this.props.audience.audience} {this.props.audience.date} {this.props.audience.rating}
          <picture>
            <img src={require('./charlieChaplin.png')} alt="Chaplin" />
          </picture>
          <button type="button" onClick={() => this.props.deleteAudience(this.props.audience.id)}>Delete Audience</button>
          <button type="button" onClick={() => {this.props.history.push(`/audiences/${this.props.audience.id}/edit`)}}>Edit</button>
          </div>
    );
  }
}

export default AudiencesCard;
