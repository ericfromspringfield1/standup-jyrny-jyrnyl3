import React, { Component } from "react"
import AudiencesManager from "../../modules/AudiencesManager"
import "./AudiencesForm.css"

class AudiencesEditForm extends Component {
    //set the initial state
    state = {
      audience: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingAudience = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedAudience = {
        audience: this.state.audience,
        id: this.props.match.params.audienceId,
        userId: parseInt(sessionStorage.getItem("credentials"))
      };

      AudiencesManager.update(editedAudience)
      .then(() => this.props.history.push("/audiences"))
    }

    componentDidMount() {
      AudiencesManager.get(this.props.match.params.audienceId)
      .then(audience => {
          this.setState({
            audience: audience.audience,
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
                id="audience"
                value={this.state.audience}
              />
              <label htmlFor="audience">Audience</label>
            </div>


            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAudience}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default AudiencesEditForm


// import React, { Component } from "react";
// import AudiencesManager from "../../modules/AudiencesManager";
// import "./AudiencesForm.css";

// class AudiencesEditForm extends Component {
//   //set the initial state
//   state = {
//     audience: "",
//     loadingStatus: true
//   };
//   constructor() {
//     super();

//     this.state = {
//       showMenu: false
//     };

//     this.showMenu = this.showMenu.bind(this);
//     this.closeMenu = this.closeMenu.bind(this);
//   }

//   showMenu(editedAudience) {
//     editedAudience.preventDefault();

//     this.setState({ showMenu: true }, () => {
//       document.addEventListener("click", this.closeMenu);
//     });
//   }

//   closeMenu(editedAudience) {
//     if (this.dropdownMenu.contains(editedAudience.target)) {
//       this.setState({ showMenu: false }, () => {
//         document.removeEventListener("click", this.closeMenu);
//       });
//     }

//     updateExistingAudience = evt => {
//       evt.preventDefault();
//       this.setState({ loadingStatus: true });
//       const editedAudience = {
//         audience: this.state.audience,
//         id: this.props.match.params.audienceId,
//         userId: parseInt(sessionStorage.getItem("credentials"))
//       };

//       AudiencesManager.update(editedAudience).then(() =>
//         this.props.history.push("/audiences"));
//     };
//   }
//   componentDidMount() {
//     AudiencesManager.get(this.props.match.params.audienceId).then(audience => {
//       this.setState({
//         audience: audience.audience,
//         loadingStatus: false 
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//       <div>
//         <button onClick={this.showMenu}>How Was The Crowd?</button>
//       </div>
//         {this.state.showMenu ? (
//           <div
//             className="menu"
//             ref={element => {
//               this.dropdownMenu = element;
//             }}
//           >
//             <button type="button" disabled={this.state.loadingStatus}
//                 onClick={this.updateExistingAudience}
//                 onChange={this.handleFieldChange}
//                 className="btn btn-primary"> Hot </button>
//             <button type="button" disabled={this.state.loadingStatus}
//                 onClick={this.updateExistingAudience}
//                 onChange={this.handleFieldChange}
//                 className="btn btn-primary"> Cold </button>
//             <button type="button" disabled={this.state.loadingStatus}
//                 onClick={this.updateExistingAudience}
//                 onChange={this.handleFieldChange}
//                 className="btn btn-primary"> Corporate </button>
//             <button type="button" disabled={this.state.loadingStatus}
//                 onClick={this.updateExistingAudience}
//                 onChange={this.handleFieldChange}
//                 className="btn btn-primary"> Sparse </button>
//             <button type="button" disabled={this.state.loadingStatus}
//                 onClick={this.updateExistingAudience}
//                 onChange={this.handleFieldChange}
//                 className="btn btn-primary"> Engaged </button>
//             <button type="button" disabled={this.state.loadingStatus}
//                 onClick={this.updateExistingAudience}
//                 onChange={this.handleFieldChange}
//                 className="btn btn-primary"> A Buncha Drunks </button>
//             <button type="button" disabled={this.state.loadingStatus}
//                 onClick={this.updateExistingAudience}
//                 onChange={this.handleFieldChange}
//                 className="btn btn-primary"> A Buncha Hecklers </button>
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default AudiencesEditForm;
