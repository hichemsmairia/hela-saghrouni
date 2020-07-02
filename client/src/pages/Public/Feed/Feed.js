import React from 'react';
import AnimatedButton from 'react-animated-buttons';
import './style.css' ; 
 class Feed extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
    <div class="overlay">
<form>
   <div class="con">
   <header class="head-form">
      <h2>Rediger un article </h2>
      <p>cet espace est reserve uniquement pour le redacteur</p>
   </header>
   <div class="field-set">
     
         <span class="input-item">
           <i class="fa fa-user-circle"></i>
         </span>
         <input class="form-input" id="txt-input" type="text" placeholder="Titre d'article" required/>
     
     
     
      <span class="input-item">
        <i class="fa fa-key"></i>
       </span>
      <input class="form-input-article" type="text" placeholder="Article" id="txt-input"  name="password" required/>
     
     
     
     
      

      <button class="log-in"> Publier </button>
   </div>
  
   
     
  </div>
  
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

export default Feed ; 