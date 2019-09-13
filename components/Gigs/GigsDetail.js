import React, { Component } from 'react';
import GigsManager from '../../modules/GigsManager';

class GigsDetail extends Component {

  state = {
      gig: "",
      date: "",
      rating: 0,
      loadingStatus: true, 
  }

  componentDidMount(){
    console.log("GigDetail: ComponentDidMount");
    //get(id) from GigsManager and hang on to the data; put it into state
    GigsManager.get(this.props.gigId)
    .then((gig) => {
      this.setState({
        gig: gig.gig,
        date: gig.date,
        rating: gig.rating,
        spot: this.spot.spot,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in GigsManager and re-direct to the gig list.
    this.setState({loadingStatus: true})
    GigsManager.delete(this.props.gigId)
    .then(() => this.props.history.push("/gigs?expand=spots"))
}

  render() {
    return (
        <>
      <div className="card">
          {this.props.gig.gig} {this.props.gig.date} {this.props.gig.rating} {this.props.gig.spot} 
        <button type="button" onClick={() => { this.props.history.push(`/gigs${this.props.gig.id}/edit`) }}>Edit</button>
        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Gig</button>
      </div>
        </>
        
    );
  }
}
 
export default GigsDetail;
