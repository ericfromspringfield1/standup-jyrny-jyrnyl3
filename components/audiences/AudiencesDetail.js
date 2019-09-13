import React, { Component } from 'react';
import AudiencesManager from '../../modules/AudiencesManager';

class AudiencesDetail extends Component {

  state = {
      audience: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("AudienceDetail: ComponentDidMount");
    //get(id) from AudiencesManager and hang on to the data; put it into state
    AudiencesManager.get(this.props.audienceId)
    .then((audience) => {
      this.setState({
        audience: audience.audience,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AudiencesManager and re-direct to the audience list.
    this.setState({loadingStatus: true})
    AudiencesManager.delete(this.props.audienceId)
    .then(() => this.props.history.push("/audiences"))
}

  render() {
    return (
        <>
      <div className="card">
          {this.props.audience.audience}
        <button type="button" onClick={() => { this.props.history.push(`/audiences${this.props.audience.id}/edit`) }}>Edit</button>
        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Audience</button>
      </div>
        </>
        
    );
  }
}

export default AudiencesDetail;
