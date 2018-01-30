import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Client from './components/Client.jsx';
import Server from './components/Server.jsx';
import Database from './components/Database.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clients: [],
      servers: [],
      dbs: []
    }

    this.handleSearchFrom = this.handleSearchFrom.bind(this);

    // 'Angular', 'React', 'JavaScript', 'JQuery'
    // 'Node', 'Express', 'Hapi', 'Sequilize', 'NPM', 'Body-Parse', 'Babel'
    // 'MongoDB', 'Mongoose', 'MySQL'

  }

  loadState() {
    $.ajax({
      url: '/items',
      success: (data) => {
        data.forEach(obj => {

          if (obj.mesa === 'clients') {
            this.setState({
              clients: [...this.state.clients, obj.name]
            })    
          } else if (obj.mesa === 'servers') {
            this.setState({
              servers: [...this.state.servers, obj.name]//{name: obj.name, url: obj.url}]
            }) 
          } else if (obj.mesa === 'dbs') {
            this.setState({
              dbs: [...this.state.dbs, obj.name]//{name: obj.name, url: obj.url}]
            })
          }      
        })
        
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  componentDidMount() {
    this.loadState();
  }

  handleSearchFrom(table) {

    return (frameWork) => {
      $.ajax({
        type: 'POST',
        url: '/items',
        data: {
          table: table,
          frameWork: frameWork
        },
        dataType: 'application/json',
        success: (data) => {
          console.log(data, 'type: ', type, 'frameWork: ', frameWork);
          this.loadState();
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
  }   

  render () {
    return (
      <div>
        <h1>Full Stack Strucutre</h1>
        <br/>
        <br/> 
        <div id="side">  
          <Client clients={this.state.clients} handleSearch={this.handleSearchFrom('clients')}/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x2192;&#x2192;&#x2192;HTTP&#x2192;&#x2192;&#x2192;</p>
          <Server servers={this.state.servers} handleSearch={this.handleSearchFrom('servers')}/>
        </div> 
        <br/>
        <br/>  
        <div id="side">
          <Database dbs={this.state.dbs} handleSearch={this.handleSearchFrom('dbs')}/>
          <h1 id="api">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add API connections</h1>
        </div>  
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));