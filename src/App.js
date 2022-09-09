import { useCallback, useEffect, useState } from "react";
import ResultContainer from "./ResultContainer";
import {Button,Heading,Input,FormControl, IconButton,useColorMode,useColorModeValue,Box } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

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
    <Box className="App">
      <header className="App-header">
        <Heading as="h1">Book Search</Heading>
        <FormControl 
        as='form' 
        onSubmit={handleSubmit}
        >
          <Input type="text" placeholder="Search" required value={bookSearch} onChange={(e) => setBookSearch(e.target.value)} w='90%' maxW='800px'/>

          <IconButton
            icon={<SearchIcon />} 
            aria-label='Search for Book' 
            type="submit" 
            value="Submit"
            w='10%'
            maxW='200px'
          />

        </FormControl>
      </header>
      {resultsContainer && <ResultContainer results={resultsV} bookSearch={bookSearch} />}
    </Box>
  );
}

export default App;
