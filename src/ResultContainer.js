import {Grid, GridItem, Text, Button,Heading, Image,Flex,useColorMode,useColorModeValue,Box } from '@chakra-ui/react'

const ResultContainer = ({results, bookSearch}) => {
   return (
    <Box>
        <Heading as="h2">Results for: {bookSearch}</Heading>
        <Grid
        templateColumns='repeat(2, 1fr)'
        gap={5}
        >
             {results.map((book, index) => (
                <GridItem 
                    key={index}
                    colSpan={1}
                    borderWidth='2px'
                    borderColor='teal' 
                >
                    <Flex>
                        <Box
                            w='30%'
                            h='auto'
                        >
                            <Image
                                w='100%' 
                                src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} 
                            />
                        </Box>
                        

                        <Box
                            w='70%'
                            h='auto'
                        >
                            <Heading as="h5">{book.volumeInfo.title}</Heading>
                            <Text

                            >{book.volumeInfo.description}</Text>

                            <Button as='a' href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer">Read More</Button>
                        </Box>

                    </Flex>
                    
                    

                </GridItem>
            ))}
        </Grid>
       
    </Box>
   ) 
}

export default ResultContainer;