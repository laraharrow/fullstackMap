import React from 'react';

 class Server extends React.Component {
 	constructor(props) {
 		super(props);
 		this.state = {
 			program: []
 		}
 	
 		this.handleSelecting = this.handleSelecting.bind(this);
 		this.search = this.search.bind(this);

 	}

 	handleSelecting(e) {
 		let value = `${e.target.value}\n`;
 		this.setState({
 			program: [...this.state.program, ...value]
 		})
 	}

 	search(e) {
		e.preventDefault();
		this.props.handleSearch(e.target.add.value);
	}
 		
 	render() {
 		return (	
		  <div id="server">
		    <h3>Server</h3>
		    <p>Server-side scripts are run on the server so it require a server. This reduces the amount of bugs or compatibility issues since the code is run on one server using one language and hosting software. Server-side programming can also be encrypted when users send form variables, protecting users against any hack attempts. Some examples of server-side programming languages are C#, VB.NET Shop, and PHP.

Server-side scripting is different from client-side scripting where scripts are run on the web browser, usually in JavaScript. The primary advantage to server-side scripting is the ability to highly customize the response based on the user's requirements, access rights, or queries into data stores.</p>
		    <br/>
		    <form onSubmit={this.search}>
		    	<input name="add"/>
		    	<input type="submit" value="add"/>
		    </form>
		    <br/>
		    <br/>
		  	<select id="select" onChange={this.handleSelecting}>
		  		<option>servers</option>
			  	{this.props.servers.map((item, i) => {
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

export default Server;
