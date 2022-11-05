import { useCallback, useState } from "react";
import ResultContainer from "./components/ResultContainer";
import Placeholder from "./components/Placeholder";
import {Box} from '@chakra-ui/react'
import Header from "./components/Header";
/* import FilterBooks from "./components/FilterBooks"; */
import PendingSearch from "./components/Pending";
import Footer from "./components/Footer";

function App() {
  const [bookSearch, setBookSearch] = useState('');
  const [resultsContainer, setResultsContainer] = useState(false);
  const [resultsV, setResultsV] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [placeHome, setplaceHome] = useState(true);
  /* const [orderRes, setOrderRes] = useState('relevance');
  const [resType, setResType] = useState('all'); */

  const getBooks = useCallback((bookSearch) => {
    //const book = {bookSearch};
    console.log(bookSearch);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&maxResults=6`)
        .then(res => res.json())
        .then((data) =>{
          console.log(data.items, 'api results');
    
          setResultsV(data.items);
    
          //set the results container to be true
          setIsPending(false)
          setResultsContainer(true);
        })
        .catch((err) => {
          console.log(err.message, 'error message');
        })
  }, [])

  const handleSubmit = (e) =>{

    //prevent page refresh
    e.preventDefault();
    //console.log(e);

    //set the state to call the API to true
    setplaceHome(false);
    setIsPending(true);

    //call API
    getBooks(bookSearch);
  }

  return (
    <Box display='flex' flexDirection='column'minH='100%'>
      <Header handleSubmit={handleSubmit} bookSearch={bookSearch} setBookSearch={setBookSearch} />

      {placeHome && <Placeholder/>}

      {isPending && <PendingSearch/>}

      {resultsContainer /* && <FilterBooks setOrderRes={setOrderRes} setResType={setResType} handleSubmit={handleSubmit} orderRes={orderRes} resType={resType} /> */}

      {resultsContainer && <ResultContainer results={resultsV} bookSearch={bookSearch}/>}

      <Footer />
    </Box>
  );
}

export default App;
