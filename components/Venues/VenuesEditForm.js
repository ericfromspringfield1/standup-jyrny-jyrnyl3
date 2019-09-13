import React, { Component } from "react"
import VenuesManager from "../../modules/VenuesManager"
import "./VenuesForm.css"

class VenuesEditForm extends Component {
    //set the initial state
    state = {
      venue: "",
      city: "",
      state: "",
      capacity: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingVenue = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedVenue = {
        venue: this.state.venue,
        date: this.state.date,
        id: this.props.match.params.venueId,
        userId: parseInt(sessionStorage.getItem("credentials"))
      };

      VenuesManager.update(editedVenue)
      .then(() => this.props.history.push("/venues"))
    }

    componentDidMount() {
      VenuesManager.get(this.props.match.params.venueId)
      .then(venue => {
          this.setState({
            venue: venue.venue,
            city: venue.city,
            state: venue.state,
            capacity: venue.capacity,
            loadingStatus: false,
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
                id="venue"
                value={this.state.venue}
              />
              <label htmlFor="venue">Venue</label>

              <input
                type="city"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="city"
                value={this.state.city}
              />
              <label htmlFor="city">City</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="state"
                value={this.state.rating}
                />
              <label htmlFor="state">State</label>
              
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="capacity"
                value={this.state.rating}
                />
              <label htmlFor="capacity">capacity</label>
            </div> 

            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingVenue}
                className="btn btn-primary"
                >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default VenuesEditForm
