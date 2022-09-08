import { useState } from "react";

function App() {
  const [bookSearch, setBookSearch] = useState('');
  const [resultsContainer, setResultsContainer] = useState(false);

  const handleSubmit = (e) =>{

    //prevent page refresh
    e.preventDefault();
    //console.log(e);

    //set the results container to be true
    setResultsContainer(true);

    //call the API
  }

  const handleChange = (e) => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Search</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholer="Search" required value={bookSearch} onChange={(e) => setBookSearch(e.target.value)}/>
          <input type="submit" value="Submit" />
        </form>
      </header>
      {resultsContainer && <div>Results Container</div>}
    </div>
  );
}

export default App;
