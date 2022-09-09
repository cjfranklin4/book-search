import { useCallback, useEffect, useState } from "react";
import ResultContainer from "./ResultContainer";
import {Button,Heading,Input,FormControl, IconButton,useColorMode,useColorModeValue,Icon,Box, Spinner } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { BsGithub } from 'react-icons/bs'

function App() {
  const [bookSearch, setBookSearch] = useState('');
  const [resultsContainer, setResultsContainer] = useState(false);
  const [resultsV, setResultsV] = useState([]);
  const [isPending, setIsPending] = useState(false);
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
          setIsPending(false)
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
    setIsPending(true);

    //call API
    getBooks(bookSearch);
  }

  return (
    <Box className="App">
      <header className="App-header">
        <Heading as="h1" textAlign='center' mt={5} mb={2}>Book Search</Heading>
        <FormControl 
        as='form'
        display='flex' 
        onSubmit={handleSubmit}
        justifyContent='center'
        mb={5}
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

      {isPending && 
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Heading as="h2" textAlign='center'>Finding your books</Heading>
          <Spinner 
          size='xl'
          color='teal.400'
          />
        </Box>}

      {resultsContainer && <ResultContainer results={resultsV} bookSearch={bookSearch} />}

      <Box as='footer' display='flex' justifyContent='center' h='50px' background='green.400' mt={5}>
        This is a footer.

        <Box as='a' href='https://github.com/cjfranklin4/ffxiv-bingo'>
        <Icon as={BsGithub} color='teal'  _hover={{
          color: "teal.300",
          }}/>
      </Box>
      </Box>
    </Box>
  );
}

export default App;
