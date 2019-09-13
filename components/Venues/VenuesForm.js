import React, { Component } from 'react';
import VenuesManager from '../../modules/VenuesManager';
import './VenuesForm.css'

class VenuesForm extends Component {
    state = {
        venue: "",
        city: "",
        state: "",
        capacity: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create venue object, invoke the VenuesManager post method, and redirect to the full venue list
    */
    constructNewVenue = evt => {
        evt.preventDefault();
        if (this.state.venue === "" || this.state.city === "" || this.state.state === "") {
            window.alert("Please input a venue, city, and state");
        } else {
            this.setState({ loadingStatus: true });
            const venue = {
                venue: this.state.venue,
                city: this.state.city,
                state: this.state.state,
                state: this.state.capacity,
                userId: parseInt(sessionStorage.getItem("credentials"))
            };

            // Create the venue and redirect user to venue list
            VenuesManager.post(venue)
            .then(() => this.props.history.push("/venues"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="venue"
                        placeholder="Venue"
                        />
                        <label htmlFor="venue">Venue</label>
                        
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="city"
                        placeholder="City"
                        />
                        <label htmlFor="city">City</label>

                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="state"
                        placeholder="State"
                        />
                        <label htmlFor="state">State</label>

                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="capacity"
                        placeholder="Capacity"
                        />
                        <label htmlFor="capacity">Capacity</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewVenue}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default VenuesForm
