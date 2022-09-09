import { useEffect, useState } from "react";

const useFetch = () => {
    const [resultsContainer, setResultsContainer] = useState(false);
    const [resultsV, setResultsV] = useState([]);

    useEffect(() => {
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
           let newResults = resultsV.map(book => book.volumeInfo);
          setResultsV(newResults);
          console.log(newResults); 
        })
        .catch((err) => {
          console.log(err.message);
        })

        /* let newResults = resultsV.map(book => book.volumeInfo);
        setResultsV(newResults);
        console.log(newResults, 'new results'); */

      }, [callApi]);

    return {resultsContainer, resultsV}
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
    const fetchBooks = async () => {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=quilting&maxResults=6');
      const data = await response.json();
      setResultsV(data.items);
      console.log(data.items, 'intitial results');

      //set the results container to be true
      setResultsContainer(true);
      
      /* let newResults = resultsV.map(book => book.volumeInfo);
      setResultsV(newResults);
      console.log(resultsV, 'new results'); */

    }
    fetchBooks();
  }, []);

  export default useFetch;