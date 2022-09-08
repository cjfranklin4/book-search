import { useEffect, useRef, useState } from "react";
import ResultContainer from "./ResultContainer";

function App() {
  const [bookSearch, setBookSearch] = useState('');
  const [resultsContainer, setResultsContainer] = useState(false);
  const [resultsV, setResultsV] = useState([]);
  const [callApi, setCallApi] = useState([]);

  const firstUpdate = useRef(true);

  const handleSubmit = (e) =>{

    //prevent page refresh
    e.preventDefault();
    //console.log(e);

    //set the state to call the API to true
    setCallApi(true);
  }

  useEffect(() => {
    if(firstUpdate.current){
      fetch('https://www.googleapis.com/books/v1/volumes?q=quilting&maxResults=6')
    .then(res => res.json())
    .then((data) =>{
      console.log(data.items, 'api results');

      setResultsV(data.items);

      //set the results container to be true
      setResultsContainer(true);
    })
    .then(() =>{
      //console.log(resultsV, 'results');

      //set new array
      /* let newResults = resultsV.map(book => book.volumeInfo);
      setResultsV(newResults);
      console.log(newResults); */
    })
    .catch((err) => {
      console.log(err.message);
    })
  }
  }, [callApi]);

  useEffect(() => {
    let newResults = resultsV.map(book => book.volumeInfo);
      setResultsV(newResults);
      console.log(newResults, 'new results');
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book Search</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" required value={bookSearch} onChange={(e) => setBookSearch(e.target.value)}/>
          <input type="submit" value="Submit" />
        </form>
      </header>
      {/* console.log(resultsV, 'results') */}
      {resultsContainer && <ResultContainer results={resultsV}/>}
    </div>
  );
}

export default App;
