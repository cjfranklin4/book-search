import {Grid, GridItem, Text, Button,Heading, Image,Flex, Box } from '@chakra-ui/react'

const ResultContainer = ({results, bookSearch}) => {
   return (
    <Box>
        <Heading as="h2" textAlign='center' mb={2}>Results for: {bookSearch}</Heading>
        <Grid
        templateColumns='repeat(2, 1fr)'
        gap={5}
        w="95%"
        m='0 auto'
        maxW='1700px'
        >
             {results.map((book, index) => (
                <GridItem 
                    key={index}
                    colSpan={1}
                    borderWidth='2px'
                    borderColor='orange.200'
                    borderRadius='10px'
                    overflow='hidden'
                >
                    <Flex>
                        <Box
                            w='30%'
                            h='auto'
                            mr='10px'
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
                            <Heading as="h2" size="md" mb={2}>{book.volumeInfo.title}</Heading>
                            <Text mb={1}>{book.volumeInfo.authors} * {book.volumeInfo.publishedDate}</Text>

                            <Text mb={2}>{book.searchInfo.textSnippet}</Text>

                            <Text mb={2}>Publisher: {book.volumeInfo.publisher}</Text>

                            <Button as='a' href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer" backgroundColor='orange.300' 
                            _hover={{
                            backgroundColor: "orange.500",
                            color:'white'
                            }}>
                                More Info
                            </Button>
                        </Box>

                    </Flex>
                    
                    

                </GridItem>
            ))}
        </Grid>
       
    </Box>
   ) 
}

export default ResultContainer;