import {Grid, GridItem, Text, Button,Heading, Image,Flex, Box} from '@chakra-ui/react'

const ResultContainer = ({results, bookSearch}) => {
    

   return (
    <Box flexGrow='1'>
        <Heading as="h2" textAlign='center' mb={5}>Results for: {bookSearch}</Heading>
        <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)','repeat(2, 1fr)']}
        gap={5}
        w="95%"
        m='0 auto'
        maxW='1500px'
        >
             {results.map((book, index) => (
                <GridItem 
                    key={index}
                    colSpan={1}
                    borderWidth='2px'
                    borderColor='orange'
                    borderRadius='10px'
                    overflow='hidden'
                    height='100%' 
                >
                    <Flex height='100%'>
                        <Box
                            w='30%'
                            h="100%"
                            height='100%'
                            display={['none', 'block']}
                        >
                            <Image
                                w='100%'
                                height='100%' 
                                src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} 
                            />
                        </Box>
                        

                        <Box
                            w={['100%','70%']}
                            h='auto'
                            display='flex'
                            flexDirection='column'
                            alignContent='center'
                            justifyContent='center'
                            ml='10px'
                            mr='10px'
                        >
                            <Heading as="h2" size="md" mt={2} mb={2}>{book.volumeInfo.title}</Heading>
                            <Flex  mb={1} mt={1} gap='5px'>{book.volumeInfo.authors.map((name) =>(<Text m='0' key={name}>{name}</Text>)) }</Flex>
                            <Text mb={1} mt={1} fontSize='sm'>{book.volumeInfo.publishedDate}</Text>
                            <Text mb={1} mt={1} fontSize='sm'>{book.searchInfo.textSnippet}</Text>
                            <Text  mb={1} mt={1} fontSize='sm'>Publisher: {book.volumeInfo.publisher}</Text>
                            <Button as='a' href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer" w='100%' mb={2} backgroundColor='orange.300' 
                            _hover={{
                            backgroundColor: "orange.500",
                            color:'white'
                            }}
                            >
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