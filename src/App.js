import { useCallback, useState } from "react";
import ResultContainer from "./ResultContainer";
import Placeholder from "./Placeholder";
import {Flex,Heading,Input,FormControl, IconButton,useColorMode,Icon,Box, Spinner } from '@chakra-ui/react'
import { SearchIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import { BsGithub, BsBookmarksFill } from 'react-icons/bs'

function App() {
  const [bookSearch, setBookSearch] = useState('');
  const [resultsContainer, setResultsContainer] = useState(false);
  const [resultsV, setResultsV] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [placeHome, setplaceHome] = useState(true);
  const [orderRes, setOrderRes] = useState('relevance');
  const [resType, setResType] = useState('all');

  const getBooks = useCallback((bookSearch, orderRes, resType) => {
    //const book = {bookSearch};
    console.log(bookSearch, orderRes, resType);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&maxResults=6&orderBy=${orderRes}&printType=${resType}`)
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
  }, [orderRes, resType])

  const handleSubmit = (e) =>{

    //prevent page refresh
    e.preventDefault();
    //console.log(e);

    //set the state to call the API to true
    setplaceHome(false);
    setIsPending(true);

    //call API
    getBooks(bookSearch, orderRes, resType);
  }

  //Chakra UI things
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Box as="header">
        <Flex as="a" href="/" justifyContent='center' alignItems='center'>
          <Heading as="h1" textAlign='center' mt={5} mb={2}>Bookmarked</Heading>

          <Icon 
          as={BsBookmarksFill} 
          color='orange.300'/>

          <IconButton 
            onClick={toggleColorMode}
            colorScheme='blue'
            variant='outline' 
            icon={colorMode === 'light' ? <MoonIcon />  : <SunIcon />}
          >
          </IconButton>
        </Flex>
        
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
            backgroundColor='orange.300'
            _hover={{
              backgroundColor: "orange.500",
              }}
            color='white'
          />

        </FormControl>
      </Box>

      {placeHome && <Placeholder/>}

      {isPending && 
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Heading as="h2" textAlign='center'>Finding your books</Heading>
          <Spinner 
          size='xl'
          color='orange.400'
          />
        </Box>}

      {resultsContainer && <ResultContainer results={resultsV} bookSearch={bookSearch} setOrderRes={setOrderRes} setResType={setResType} handleSubmit={handleSubmit} orderRes={orderRes} resType={resType} />}

      <Box as='footer' display='flex' alignItems='center' flexDirection='column' justifyContent='center' py={5} background='orange.300' mt={5} bottom='0px'>
        <Heading as="h5" size='md'>Bookmarked</Heading>

        <Box as='a' href='https://github.com/cjfranklin4/book-search' target="_blank">
        <Icon 
        as={BsGithub} 
        color='blue.400'  
        _hover={{
          color: "white",
          }}/>
      </Box>
      </Box>
    </Box>
  );
}

export default App;
