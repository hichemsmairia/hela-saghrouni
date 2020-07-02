import React from 'react';
import AnimatedButton from 'react-animated-buttons';
 class SuggestFilm extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
    <div style={{margin: "134px"}} >

    <h1> Envoyer nous un e-mail </h1>
  	<form className="test-mailing">
    	
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="contenu de votre email"
        	required
        	value={this.state.feedback}
        	style={{width: '40%', height: '150px' , 'padding-top':'120px'}}
      	/>
    	</div>
<AnimatedButton color="success" textColor="white" onClick={this.handleSubmit()} > Envoyer l'email </AnimatedButton>
  	</form>
    </div>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit() {
  }
}

export default SuggestFilm ; 