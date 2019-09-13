import React, { Component } from "react";
import GigsManager from "../../modules/GigsManager";
import "./GigsForm.css";

class GigsEditForm extends Component {
  //set the initial state
  state = {
    gig: "",
    date: "",
    rating: 0,
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingGig = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedGig = {
      gig: this.state.gig,
      date: this.state.date,
      rating: this.state.rating,
      id: this.props.match.params.gigId,
      userId: parseInt(sessionStorage.getItem("credentials")),
    };

    GigsManager.update(editedGig).then(() => this.props.history.push("/gigs"));
  };

  componentDidMount() {
    GigsManager.get(this.props.match.params.gigId).then(gig => {
      this.setState({
        gig: gig.gig,
        date: gig.date,
        rating: gig.rating,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="gig"
                value={this.state.gig}
              />
              <label htmlFor="gig">Gig</label>

              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="spot"
                value={this.state.spot}
              />
              <label htmlFor="spot">Spot</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="rating"
              value={this.state.rating}
              />
            <label htmlFor="rating">Rating</label>
            </div>

            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingGig}
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default GigsEditForm;
