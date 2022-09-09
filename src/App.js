import { useCallback, useEffect, useState } from "react";
import ResultContainer from "./ResultContainer";

function App() {
  const [bookSearch, setBookSearch] = useState('');
  const [resultsContainer, setResultsContainer] = useState(false);
  const [resultsV, setResultsV] = useState([]);
  const [callApi, setCallApi] = useState([]);

  const getBooks = useCallback(bookSearch => {
    //const book = {bookSearch};
    console.log(bookSearch);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&maxResults=6`)
        .then(res => res.json())
        .then((data) =>{
          //console.log(data.items, 'api results');
    
          setResultsV(data.items);
    
          //set the results container to be true
          setResultsContainer(true);
        })
        .catch((err) => {
          console.log(err.message, 'error message');
        })
  }, [bookSearch])

  const handleSubmit = (e) =>{

    //prevent page refresh
    e.preventDefault();
    //console.log(e);

    //set the state to call the API to true
    setCallApi(true);

    //call API
    getBooks(bookSearch);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Search</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" required value={bookSearch} onChange={(e) => setBookSearch(e.target.value)}/>
          <input type="submit" value="Submit" />
        </form>
      </header>
      {resultsContainer && <ResultContainer results={resultsV}/>}
    </div>
  );
}

export default App;
