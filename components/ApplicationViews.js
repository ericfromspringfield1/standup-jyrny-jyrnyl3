import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./Authentication/Login";
import Welcome from "./Authentication/Welcome";
import Registration from "./Authentication/Registration";
import GigsList from "./Gigs/GigsList";
import GigsDetail from "./Gigs/GigsDetail";
import GigsForm from "./Gigs/GigsForm";
import GigsEditForm from "./Gigs/GigsEditForm";
import AudiencesList from "./Audiences/AudiencesList";
import AudiencesDetail from "./Audiences/AudiencesDetail";
import AudiencesEditForm from "./Audiences/AudiencesEditForm";
import AudiencesForm from "./Audiences/AudiencesForm";
import VenuesList from "./Venues/VenuesList";
import VenuesDetail from "./Venues/VenuesDetail";
import VenuesForm from "./Venues/VenuesForm";
import VenuesEditForm from "./Venues/VenuesEditForm";

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Login" component={Login} />

        <Route
          exact
          path="/gigs"
          render={props => {
            if (this.isAuthenticated()) {
              return <GigsList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          exact
          path="/gigs/:gigId(\d+)"
          render={props => {
            // Pass the gigId to the GigsDetail Component
            return (
              <GigsDetail
                gigId={parseInt(props.match.params.gigId)}
                {...props}
              />
            );
          }}
        />

        {/* Our shiny new route. */}
        <Route
          path="/gigs/new"
          render={props => {
            return <GigsForm {...props} />;
          }}
        />

        <Route
          exact
          path="/gigs/:gigId(\d+)/edit"
          render={props => {
            return <GigsEditForm {...props} />;
          }}
        />

        <Route
          path="/audiences/new"
          render={props => {
            return <AudiencesForm {...props} />;
          }}
        />
        <Route
          exact
          path="/audiences"
          render={props => {
            if (this.isAuthenticated()) {
              return <AudiencesList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          exact
          path="/audiences/:audienceId(\d+)"
          render={props => {
            // Pass the audienceId to the AudiencesDetail Component
            return (
              <AudiencesDetail
                audienceId={parseInt(props.match.params.audienceId)}
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/audiences/:audienceId(\d+)/edit"
          render={props => {
            return <AudiencesEditForm {...props} />;
          }}
        />

        <Route
          path="/venues/new"
          render={props => {
            return <VenuesForm {...props} />;
          }}
        />
        <Route
          exact
          path="/venues"
          render={props => {
            if (this.isAuthenticated()) {
              return <VenuesList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          exact
          path="/venues/:venueId(\d+)"
          render={props => {
            // Pass the venueId to the VenuesDetail Component
            return (
              <VenuesDetail
                venueId={parseInt(props.match.params.venueId)}
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/venues/:venueId(\d+)/edit"
          render={props => {
            return <VenuesEditForm {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}
