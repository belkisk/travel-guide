import './App.css';
import React from 'react';
import response from './Backend.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="header">Where do you want to go?</h1>
        <form>
          <input type="text" name="search-term" placeholder="City Name" class="input-text"></input>
          <button type="submit" class="submit-button">Go</button>
        </form>
      </header>
      <Results/>
    </div>
  );
}

class Results extends React.Component{
  render() {
     
    const resultList = response.results;
    const results = resultList.map((result) =>
      <ListItem value={result} />
    );
    return (<div className="results">
      {results}
    </div>);
  }  
}

function ListItem(props) {
  return (<li>
      <div className="listItem">
        <img name="Photo" src="http://maps.gstatic.com/mapfiles/place_api/icons/travel_agent-71.png" alt="" className="image"></img>
        <div>
          <p className="attraction-name">{props.value.name}</p>
        </div>        
      </div>
    </li>);
}

export default App;
