import React from 'react';

class Client extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			program: []
		}

		this.handleSelecting = this.handleSelecting.bind(this);
		this.search = this.search.bind(this);
		this.clearFramework = this.clearFramework.bind(this);
	}

	handleSelecting(e) {
		let value = `${e.target.value}\n`;
		console.log(value);
		 this.setState({
		 	program: [...this.state.program, ...value]
		 })
	}

	search(e) {
		e.preventDefault();
		this.props.handleSearch(e.target.add.value);
	}

	clearFramework(e) {
		// this function should clear the selected frameworks
	}

	render() {	
		return (
		  <div id="client">
		  	<h3>Client</h3>
		  	<p>Client-side script is taking action on the user's browser. Its provide us functionality without needing access to a web server. An example of client-side programming is Javascript. JavaScript is the main client-side scripting language for the Web. The problem with client-side scripts is the limit of control and operating systems and web browsers.</p>
		  	<br/>
		  	<form onSubmit={this.search}>
		  		<input name="add"/>
		  		<input type="submit" value="add" />
		  	</form>
		  	<br/>
		  	<br/>
		  	<select id="select" onChange={this.handleSelecting}>
			  	<option>clients</option>
			  	{this.props.clients.map((item, i) => {
			  		return (
				  		<option key={i} value={item}>{item}</option>
				  	)	
			  	})}
		  	</select>
		  	<br/>
		  	<br/>
		  	<div id="selected">
		  		<a target="_blank" href={`https://www.google.com/search?q=${this.state.program.join('')}DOCS`}>{this.state.program}</a>
		  	</div>
		 	</div>
		)
	}
}		 	

export default Client;


