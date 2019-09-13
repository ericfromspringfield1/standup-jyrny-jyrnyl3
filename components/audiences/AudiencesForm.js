// import React, { Component } from "react";
// import AudiencesManager from '../../modules/AudiencesManager';
// import './AudiencesForm.css'

// class AudiencesForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       showMenu: false
//     };
//     this.showMenu = this.showMenu.bind(this);
//   }
//   showMenu(event) {
//     event.preventDefault();

//     this.setState({
//       showMenu: true

//     });

//     AudiencesManager.post(event)
//             .then(() => this.props.history.push("/audiences"));
//   }

//   render() {
//     return (
//       <div>
//         <button>Show menu</button>
//           <div className="menu">
//             <button> Hot </button>
//             <button> Cold</button>
//             <button> Corporate </button>
//             <button> Sparse </button>
//             <button> Engaged </button>
//             <button> A Buncha Drunks </button>
//             <button> A Buncha Hecklers </button>
//           </div>
//         )}
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import AudiencesManager from '../../modules/AudiencesManager';
import './AudiencesForm.css'

class AudiencesForm extends Component {
    state = {
        audience: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create audience object, invoke the AudiencesManager post method, and redirect to the full audience list
    */
    constructNewAudience = evt => {
        evt.preventDefault();
        if (this.state.audience === "") {
            window.alert("Please input an audience");
        } else {
            this.setState({ loadingStatus: true });
            const audience = {
                audience: this.state.audience,
                userId: parseInt(sessionStorage.getItem("credentials"))
            };

            // Create the audience and redirect user to audience list
            AudiencesManager.post(audience)
            .then(() => this.props.history.push("/audiences"));
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
                        id="audience"
                        placeholder="What Type Of Crowd Was In Attendance"
                        />
                        <label htmlFor="audience">Audience</label>
                        


                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewAudience}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default AudiencesForm 
