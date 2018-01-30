import React from 'react';

 class Database extends React.Component {
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
		  <div id="database">
		    <h3>Database</h3>
		    <p>A database is an organized collection of data.[1] It is a collection of schemas, tables, queries, reports, views, and other objects. Database designers typically organize the data to model aspects of reality in a way that supports processes requiring information, such as (for example) modelling the availability of rooms in hotels in a way that supports finding a hotel with vacancies.</p>
		    <br/>
		    <form onSubmit={this.search}>
		    	<input name="add"/>
		    	<input type="submit" value="add"/>
		    </form>
		    <br/>
		    <br/>
		  	<select id="select" onChange={this.handleSelecting}>
		  		<option>databases</option>
			  	{this.props.dbs.map((item, i) => {
			  		return (
				  		<option key={i} value={item}>{item}</option>
				  	)	
			  	})}
		  	</select>
		  	<br/>
		    <br/>
		  	<div id="selected">
		  		<a target="_blank" href={`https://www.google.com/search?q=${this.state.program.join('')}DOCS`}>{this.state.program} </a>
		  	</div>
		  </div>
		)
	}
}		

export default Database;